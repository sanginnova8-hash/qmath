/**
 * Image compressor utility for client-side math diagrams and question attachments.
 * Resizes large screenshots/photos to optimal dimensions (~1000-1200px)
 * and compresses them to compact WebP/JPEG/PNG Data URLs.
 */

export interface CompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
}

export async function compressImage(
  file: File,
  options: CompressionOptions = {}
): Promise<{ dataUrl: string; sizeKb: number; width: number; height: number; name: string }> {
  const { maxWidth = 1200, maxHeight = 1200, quality = 0.85 } = options;

  // Preserve SVGs as pure vector data URLs
  if (file.type === 'image/svg+xml') {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = reader.result as string;
        resolve({
          dataUrl,
          sizeKb: Math.round(dataUrl.length / 1024),
          width: 0,
          height: 0,
          name: file.name
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  return new Promise((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);

      let width = img.naturalWidth || img.width;
      let height = img.naturalHeight || img.height;

      // Scale down proportionally if larger than constraints
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Canvas 2D context not available'));
        return;
      }

      // Smooth resizing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, width, height);

      // Determine output format
      const hasAlpha = file.type === 'image/png' || file.type === 'image/webp';
      const outputType = hasAlpha ? 'image/png' : 'image/jpeg';

      // Try WebP first if browser supports it, else use outputType
      let dataUrl: string;
      try {
        dataUrl = canvas.toDataURL('image/webp', quality);
        if (!dataUrl.startsWith('data:image/webp')) {
          dataUrl = canvas.toDataURL(outputType, quality);
        }
      } catch {
        dataUrl = canvas.toDataURL(outputType, quality);
      }

      resolve({
        dataUrl,
        sizeKb: Math.round((dataUrl.length * 3) / 4 / 1024),
        width,
        height,
        name: file.name
      });
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error('Không thể tải hoặc định dạng tệp hình ảnh không hợp lệ'));
    };

    img.src = objectUrl;
  });
}

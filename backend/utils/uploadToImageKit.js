import catchAsync from './catchAsync';

export const uploadToImageKit = catchAsync(async (file) => {
  const result = await file.req.imageKit.upload({
    file: file.tempFilePath, // Temporary file path
    fileName: file.name, // Original file name
  });
  return result.url; // Returns the file URL from ImageKit
});

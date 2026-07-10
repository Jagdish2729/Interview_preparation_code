// Upload Single file
await page.locator('#fileInput').setInputFiles('path/to/file.pdf');

// Upload Multiple files
await page.locator('#fileInput').setInputFiles([
'file1.pdf',
'file2.pdf'
]);
// Remove files
await page.locator('#fileInput').setInputFiles([]);

// Upload Using Absolute Path
import path from 'path';
const filePath = path.join(__dirname, '../test-data/sample.pdf');
await page.locator('#upload').setInputFiles(filePath);

//everything above will work if HTML looks like this <input type="file">.
//if not type file or is hidden then use filechooser

const [fileChooser] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'Upload' }).click()
]);

await fileChooser.setFiles('test-data/sample.pdf');

//Handling Downloads
const [download] = await Promise.all([
page.waitForEvent('download'),
page.locator('#downloadBtn').click()
]);
// Save file
await download.saveAs('downloads/' + download.suggestedFilename());
// Get file path
const path = await download.path();
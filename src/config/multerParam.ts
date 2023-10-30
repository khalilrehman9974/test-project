import {uuid} from 'uuidv4';

const multerAzure = require('multer-azure');
const multerConfig = require('multer');
export const upload = multerConfig({
  storage: multerAzure({
    connectionString:
      'DefaultEndpointsProtocol=https;AccountName=purefamilydevstg;AccountKey=9du1+0QHbrQBhw23rOp1EUmbW48vEVoKYtEzM70+pH7t8N7ScQv6+P56Wf+Hle03Dw17piMZgguo+AStxM/LzQ==;EndpointSuffix=core.windows.net', //Connection String for azure storage account, this one is prefered if you specified, fallback to account and key if not.
    account: 'purefamilydevstg', //The name of the Azure storage account
    key:
      '9du1+0QHbrQBhw23rOp1EUmbW48vEVoKYtEzM70+pH7t8N7ScQv6+P56Wf+Hle03Dw17piMZgguo+AStxM/LzQ==', //A key listed under Access keys in the storage account pane
    destination: 'videos',
    container: 'publiccontent', //Any container name, it will be created if it doesn't exist
    blobPathResolver: function (req: any, file: any, callback: any) {
      if (
        file.mimetype !== 'image/bmp' &&
        file.mimetype !== 'image/gif' &&
        file.mimetype !== 'image/jpeg' &&
        file.mimetype !== 'video/mp4' &&
        file.mimetype !== 'image/png' &&
        file.mimetype !== 'image/svg+xml' &&
        file.mimetype !== 'image/tiff' &&
        file.mimetype !== 'video/mpeg' &&
        file.mimetype !== 'application/pdf'
      ) {
        return callback(new Error('File format not allowed'));
      }
      const blobPath = getCustomFileName(req, file); //Calculate blobPath in your own way.
      callback(null, blobPath);
    },
  }),
});

function getCustomFileName(req: any, file: any) {
  console.log(req.file);
  const uuidVal = uuid();
  const filename = uuidVal + '-' + file.originalname;
  return filename;
}

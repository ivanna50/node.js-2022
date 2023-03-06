// const fs = require('node:fs/promises');
// const path = require('node:path');

// const worker = async () => {
//     try {
//         const fileNames = ['file1.txt', 'file2.txt', 'file5.txt', 'file3.txt', 'file4.txt'];
//         const folderNames = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5']
//
//         for (const folderName of folderNames) {
//             await fs.mkdir(path.join(process.cwd(), folderName,), {recursive: true});
//             console.log(folderName);
//         }
//
//         for (const fileName of fileNames) {
//             await fs.writeFile(path.join(process.cwd(), fileName), 'Hello');
//         }
//     } catch
//         (e) {
//         console.error(e.message)
//     }
//
//
// }
// worker();
// const worker = async () => {
//     try {
//         const fileNames = ['file1.txt', 'file2.txt', 'file5.txt', 'file3.txt', 'file4.txt'];
//         const folderNames = ['folder1', 'folder2', 'folder3', 'folder4', 'folder5'];
//
//
//         const promises = folderNames.map(async (folderName, index) => {
//             const folderPath = path.join(process.cwd(), folderName);
//
//             await fs.mkdir(folderPath, {recursive: true});
//             await fs.writeFile(path.join(folderPath, fileNames[index]), 'Hello!!');
//         });
//         await Promise.all(promises);
//
//         const files = await fs.readdir(path.join(process.cwd()));
//
//         for (const file of files) {
//            const stats=await fs.stat(path.join(process.cwd(),file));
//            const isFile=stats.isFile();
//            if (isFile){
//                console.log('this is file:',path.join(process.cwd(),file));
//            }else {
//                console.log('this is directory:',path.join(process.cwd(),file));
//            }
//
//         }
//     } catch (e) {
//         console.error(e.message)
//     }
// }
// worker().then();

// fs.appendFile(path.join('./file1.txt'),'\nI am happy!!!!', (err)=>{
//    if(err) throw new Error();
// })



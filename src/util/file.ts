import fs from 'fs';

export class File {
  public static readTextSync(path: string): string {
    return fs.readFileSync(path, 'utf8');
  }

  public static readJsonSync<T>(path: string): T {
    return JSON.parse(this.readTextSync(path));
  }

  public static folderExistsSync(path: string): boolean {
    return fs.existsSync(path) && fs.lstatSync(path).isDirectory();
  }

  public static fileExistsSync(path: string): boolean {
    return fs.existsSync(path) && fs.lstatSync(path).isFile();
  }
}

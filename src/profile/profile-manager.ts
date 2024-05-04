import path from 'path';
import { File, Query } from '../util';

export interface Profile {}

export class ProfileManager {
  constructor(private readonly path: string) {}

  public getProfile(name: string): Profile {
    const profileFolderPath = path.join(this.path, name);
    if (!File.folderExistsSync(profileFolderPath))
      throw new Error(`Profile ${name} does not exist`);

    const profileFormPath = path.join(profileFolderPath, 'form.txt');
    if (!File.fileExistsSync(profileFormPath))
      throw new Error(`Profile ${name} does not have a form.txt file`);

    const profileFormText = File.readTextSync(profileFormPath);
    const profileFormParsed = Query.parse(profileFormText);

    return {};
  }
}

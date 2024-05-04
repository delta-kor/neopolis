import path from 'path';
import { File, Query, ResponseQuery } from '../util';

export interface Profile {
  iauth: string;
  userId: string;
}

export interface ProfileFormQuery extends ResponseQuery {
  iauth: string;
  user_id: string;
  first_request: string;
}

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
    const profileFormParsed = Query.parse<ProfileFormQuery>(profileFormText);

    return {
      iauth: profileFormParsed.iauth,
      userId: profileFormParsed.user_id,
    };
  }
}

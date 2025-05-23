/* eslint-disable */
import { Locales } from 'intlayer';
import _gaZYDh03WIQU3myW0BeV from './atoms-template.ts';
import _gXBWtJRq144erOAOUi79 from './common.ts';
import _kaW4h8CA5aAecLVojDic from './login.ts';
import _2yzR4NDpi6nQnmLlNX94 from './root.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "atoms-template": typeof _gaZYDh03WIQU3myW0BeV;
    "common": typeof _gXBWtJRq144erOAOUi79;
    "login": typeof _kaW4h8CA5aAecLVojDic;
    "root": typeof _2yzR4NDpi6nQnmLlNX94;
  }

  type DeclaredLocales = Locales.ENGLISH | Locales.HINDI_INDIA;
  type RequiredLocales = Locales.ENGLISH | Locales.HINDI_INDIA;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}
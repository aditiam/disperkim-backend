import favicon from "./extensions/logojabar.png";
import logo from "./extensions/logojabar.png";
import logodisperkim from "./extensions/logodisperkim.png";

export default {
  config: {
    auth: {
      logo: logodisperkim,
    },
    menu: {
      logo: logo,
    },
    head: {
      favicon: favicon,
    },
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap(app) {
    console.log(app);
  },
};

const localeOptions = [
  {
    locale: 'af_NA',
    description: 'Afrikaans (Namibia)'
  },
  {
    locale: 'af_ZA',
    description: 'Afrikaans (South Africa)'
  },
  {
    locale: 'af',
    description: 'Afrikaans'
  },
  {
    locale: 'ak_GH',
    description: 'Akan (Ghana)'
  },
  {
    locale: 'ak',
    description: 'Akan'
  },
  {
    locale: 'sq_AL',
    description: 'Albanian (Albania)'
  },
  {
    locale: 'sq',
    description: 'Albanian'
  },
  {
    locale: 'am_ET',
    description: 'Amharic (Ethiopia)'
  },
  {
    locale: 'am',
    description: 'Amharic'
  },
  {
    locale: 'ar_DZ',
    description: 'Arabic (Algeria)'
  },
  {
    locale: 'ar_BH',
    description: 'Arabic (Bahrain)'
  },
  {
    locale: 'ar_EG',
    description: 'Arabic (Egypt)'
  },
  {
    locale: 'ar_IQ',
    description: 'Arabic (Iraq)'
  },
  {
    locale: 'ar_JO',
    description: 'Arabic (Jordan)'
  },
  {
    locale: 'ar_KW',
    description: 'Arabic (Kuwait)'
  },
  {
    locale: 'ar_LB',
    description: 'Arabic (Lebanon)'
  },
  {
    locale: 'ar_LY',
    description: 'Arabic (Libya)'
  },
  {
    locale: 'ar_MA',
    description: 'Arabic (Morocco)'
  },
  {
    locale: 'ar_OM',
    description: 'Arabic (Oman)'
  },
  {
    locale: 'ar_QA',
    description: 'Arabic (Qatar)'
  },
  {
    locale: 'ar_SA',
    description: 'Arabic (Saudi Arabia)'
  },
  {
    locale: 'ar_SD',
    description: 'Arabic (Sudan)'
  },
  {
    locale: 'ar_SY',
    description: 'Arabic (Syria)'
  },
  {
    locale: 'ar_TN',
    description: 'Arabic (Tunisia)'
  },
  {
    locale: 'ar_AE',
    description: 'Arabic (United Arab Emirates)'
  },
  {
    locale: 'ar_YE',
    description: 'Arabic (Yemen)'
  },
  {
    locale: 'ar',
    description: 'Arabic'
  },
  {
    locale: 'hy_AM',
    description: 'Armenian (Armenia)'
  },
  {
    locale: 'hy',
    description: 'Armenian'
  },
  {
    locale: 'as_IN',
    description: 'Assamese (India)'
  },
  {
    locale: 'as',
    description: 'Assamese'
  },
  {
    locale: 'asa_TZ',
    description: 'Asu (Tanzania)'
  },
  {
    locale: 'asa',
    description: 'Asu'
  },
  {
    locale: 'az_Cyrl',
    description: 'Azerbaijani (Cyrillic)'
  },
  {
    locale: 'az_Cyrl_AZ',
    description: 'Azerbaijani (Cyrillic, Azerbaijan)'
  },
  {
    locale: 'az_Latn',
    description: 'Azerbaijani (Latin)'
  },
  {
    locale: 'az_Latn_AZ',
    description: 'Azerbaijani (Latin, Azerbaijan)'
  },
  {
    locale: 'az',
    description: 'Azerbaijani'
  },
  {
    locale: 'bm_ML',
    description: 'Bambara (Mali)'
  },
  {
    locale: 'bm',
    description: 'Bambara'
  },
  {
    locale: 'eu_ES',
    description: 'Basque (Spain)'
  },
  {
    locale: 'eu',
    description: 'Basque'
  },
  {
    locale: 'be_BY',
    description: 'Belarusian (Belarus)'
  },
  {
    locale: 'be',
    description: 'Belarusian'
  },
  {
    locale: 'bem_ZM',
    description: 'Bemba (Zambia)'
  },
  {
    locale: 'bem',
    description: 'Bemba'
  },
  {
    locale: 'bez_TZ',
    description: 'Bena (Tanzania)'
  },
  {
    locale: 'bez',
    description: 'Bena'
  },
  {
    locale: 'bn_BD',
    description: 'Bengali (Bangladesh)'
  },
  {
    locale: 'bn_IN',
    description: 'Bengali (India)'
  },
  {
    locale: 'bn',
    description: 'Bengali'
  },
  {
    locale: 'bs_BA',
    description: 'Bosnian (Bosnia and Herzegovina)'
  },
  {
    locale: 'bs',
    description: 'Bosnian'
  },
  {
    locale: 'bg_BG',
    description: 'Bulgarian (Bulgaria)'
  },
  {
    locale: 'bg',
    description: 'Bulgarian'
  },
  {
    locale: 'my_MM',
    description: 'Burmese (Myanmar [Burma])'
  },
  {
    locale: 'my',
    description: 'Burmese'
  },
  {
    locale: 'yue_Hant_HK',
    description: 'Cantonese (Traditional, Hong Kong SAR China)'
  },
  {
    locale: 'ca_ES',
    description: 'Catalan (Spain)'
  },
  {
    locale: 'ca',
    description: 'Catalan'
  },
  {
    locale: 'tzm_Latn',
    description: 'Central Morocco Tamazight (Latin)'
  },
  {
    locale: 'tzm_Latn_MA',
    description: 'Central Morocco Tamazight (Latin, Morocco)'
  },
  {
    locale: 'tzm',
    description: 'Central Morocco Tamazight'
  },
  {
    locale: 'chr_US',
    description: 'Cherokee (United States)'
  },
  {
    locale: 'chr',
    description: 'Cherokee'
  },
  {
    locale: 'cgg_UG',
    description: 'Chiga (Uganda)'
  },
  {
    locale: 'cgg',
    description: 'Chiga'
  },
  {
    locale: 'zh_Hans',
    description: 'Chinese (Simplified Han)'
  },
  {
    locale: 'zh_Hans_CN',
    description: 'Chinese (Simplified Han, China)'
  },
  {
    locale: 'zh_Hans_HK',
    description: 'Chinese (Simplified Han, Hong Kong SAR China)'
  },
  {
    locale: 'zh_Hans_MO',
    description: 'Chinese (Simplified Han, Macau SAR China)'
  },
  {
    locale: 'zh_Hans_SG',
    description: 'Chinese (Simplified Han, Singapore)'
  },
  {
    locale: 'zh_Hant',
    description: 'Chinese (Traditional Han)'
  },
  {
    locale: 'zh_Hant_HK',
    description: 'Chinese (Traditional Han, Hong Kong SAR China)'
  },
  {
    locale: 'zh_Hant_MO',
    description: 'Chinese (Traditional Han, Macau SAR China)'
  },
  {
    locale: 'zh_Hant_TW',
    description: 'Chinese (Traditional Han, Taiwan)'
  },
  {
    locale: 'zh',
    description: 'Chinese'
  },
  {
    locale: 'kw_GB',
    description: 'Cornish (United Kingdom)'
  },
  {
    locale: 'kw',
    description: 'Cornish'
  },
  {
    locale: 'hr_HR',
    description: 'Croatian (Croatia)'
  },
  {
    locale: 'hr',
    description: 'Croatian'
  },
  {
    locale: 'cs_CZ',
    description: 'Czech (Czech Republic)'
  },
  {
    locale: 'cs',
    description: 'Czech'
  },
  {
    locale: 'da_DK',
    description: 'Danish (Denmark)'
  },
  {
    locale: 'da',
    description: 'Danish'
  },
  {
    locale: 'nl_BE',
    description: 'Dutch (Belgium)'
  },
  {
    locale: 'nl_NL',
    description: 'Dutch (Netherlands)'
  },
  {
    locale: 'nl',
    description: 'Dutch'
  },
  {
    locale: 'ebu_KE',
    description: 'Embu (Kenya)'
  },
  {
    locale: 'ebu',
    description: 'Embu'
  },
  {
    locale: 'en_AS',
    description: 'English (American Samoa)'
  },
  {
    locale: 'en_AU',
    description: 'English (Australia)'
  },
  {
    locale: 'en_BE',
    description: 'English (Belgium)'
  },
  {
    locale: 'en_BZ',
    description: 'English (Belize)'
  },
  {
    locale: 'en_BW',
    description: 'English (Botswana)'
  },
  {
    locale: 'en_CA',
    description: 'English (Canada)'
  },
  {
    locale: 'en_GU',
    description: 'English (Guam)'
  },
  {
    locale: 'en_HK',
    description: 'English (Hong Kong SAR China)'
  },
  {
    locale: 'en_IN',
    description: 'English (India)'
  },
  {
    locale: 'en_IE',
    description: 'English (Ireland)'
  },
  {
    locale: 'en_IL',
    description: 'English (Israel)'
  },
  {
    locale: 'en_JM',
    description: 'English (Jamaica)'
  },
  {
    locale: 'en_MT',
    description: 'English (Malta)'
  },
  {
    locale: 'en_MH',
    description: 'English (Marshall Islands)'
  },
  {
    locale: 'en_MU',
    description: 'English (Mauritius)'
  },
  {
    locale: 'en_NA',
    description: 'English (Namibia)'
  },
  {
    locale: 'en_NZ',
    description: 'English (New Zealand)'
  },
  {
    locale: 'en_MP',
    description: 'English (Northern Mariana Islands)'
  },
  {
    locale: 'en_PK',
    description: 'English (Pakistan)'
  },
  {
    locale: 'en_PH',
    description: 'English (Philippines)'
  },
  {
    locale: 'en_SG',
    description: 'English (Singapore)'
  },
  {
    locale: 'en_ZA',
    description: 'English (South Africa)'
  },
  {
    locale: 'en_TT',
    description: 'English (Trinidad and Tobago)'
  },
  {
    locale: 'en_UM',
    description: 'English (U.S. Minor Outlying Islands)'
  },
  {
    locale: 'en_VI',
    description: 'English (U.S. Virgin Islands)'
  },
  {
    locale: 'en_GB',
    description: 'English (United Kingdom)'
  },
  {
    locale: 'en_US',
    description: 'English (United States)'
  },
  {
    locale: 'en_ZW',
    description: 'English (Zimbabwe)'
  },
  {
    locale: 'en',
    description: 'English'
  },
  {
    locale: 'eo',
    description: 'Esperanto'
  },
  {
    locale: 'et_EE',
    description: 'Estonian (Estonia)'
  },
  {
    locale: 'et',
    description: 'Estonian'
  },
  {
    locale: 'ee_GH',
    description: 'Ewe (Ghana)'
  },
  {
    locale: 'ee_TG',
    description: 'Ewe (Togo)'
  },
  {
    locale: 'ee',
    description: 'Ewe'
  },
  {
    locale: 'fo_FO',
    description: 'Faroese (Faroe Islands)'
  },
  {
    locale: 'fo',
    description: 'Faroese'
  },
  {
    locale: 'fil_PH',
    description: 'Filipino (Philippines)'
  },
  {
    locale: 'fil',
    description: 'Filipino'
  },
  {
    locale: 'fi_FI',
    description: 'Finnish (Finland)'
  },
  {
    locale: 'fi',
    description: 'Finnish'
  },
  {
    locale: 'fr_BE',
    description: 'French (Belgium)'
  },
  {
    locale: 'fr_BJ',
    description: 'French (Benin)'
  },
  {
    locale: 'fr_BF',
    description: 'French (Burkina Faso)'
  },
  {
    locale: 'fr_BI',
    description: 'French (Burundi)'
  },
  {
    locale: 'fr_CM',
    description: 'French (Cameroon)'
  },
  {
    locale: 'fr_CA',
    description: 'French (Canada)'
  },
  {
    locale: 'fr_CF',
    description: 'French (Central African Republic)'
  },
  {
    locale: 'fr_TD',
    description: 'French (Chad)'
  },
  {
    locale: 'fr_KM',
    description: 'French (Comoros)'
  },
  {
    locale: 'fr_CG',
    description: 'French (Congo - Brazzaville)'
  },
  {
    locale: 'fr_CD',
    description: 'French (Congo - Kinshasa)'
  },
  {
    locale: 'fr_CI',
    description: 'French (Côte d’Ivoire)'
  },
  {
    locale: 'fr_DJ',
    description: 'French (Djibouti)'
  },
  {
    locale: 'fr_GQ',
    description: 'French (Equatorial Guinea)'
  },
  {
    locale: 'fr_FR',
    description: 'French (France)'
  },
  {
    locale: 'fr_GA',
    description: 'French (Gabon)'
  },
  {
    locale: 'fr_GP',
    description: 'French (Guadeloupe)'
  },
  {
    locale: 'fr_GN',
    description: 'French (Guinea)'
  },
  {
    locale: 'fr_LU',
    description: 'French (Luxembourg)'
  },
  {
    locale: 'fr_MG',
    description: 'French (Madagascar)'
  },
  {
    locale: 'fr_ML',
    description: 'French (Mali)'
  },
  {
    locale: 'fr_MQ',
    description: 'French (Martinique)'
  },
  {
    locale: 'fr_MC',
    description: 'French (Monaco)'
  },
  {
    locale: 'fr_NE',
    description: 'French (Niger)'
  },
  {
    locale: 'fr_RW',
    description: 'French (Rwanda)'
  },
  {
    locale: 'fr_RE',
    description: 'French (Réunion)'
  },
  {
    locale: 'fr_BL',
    description: 'French (Saint Barthélemy)'
  },
  {
    locale: 'fr_MF',
    description: 'French (Saint Martin)'
  },
  {
    locale: 'fr_SN',
    description: 'French (Senegal)'
  },
  {
    locale: 'fr_CH',
    description: 'French (Switzerland)'
  },
  {
    locale: 'fr_TG',
    description: 'French (Togo)'
  },
  {
    locale: 'fr',
    description: 'French'
  },
  {
    locale: 'ff_SN',
    description: 'Fulah (Senegal)'
  },
  {
    locale: 'ff',
    description: 'Fulah'
  },
  {
    locale: 'gl_ES',
    description: 'Galician (Spain)'
  },
  {
    locale: 'gl',
    description: 'Galician'
  },
  {
    locale: 'lg_UG',
    description: 'Ganda (Uganda)'
  },
  {
    locale: 'lg',
    description: 'Ganda'
  },
  {
    locale: 'ka_GE',
    description: 'Georgian (Georgia)'
  },
  {
    locale: 'ka',
    description: 'Georgian'
  },
  {
    locale: 'de_AT',
    description: 'German (Austria)'
  },
  {
    locale: 'de_BE',
    description: 'German (Belgium)'
  },
  {
    locale: 'de_DE',
    description: 'German (Germany)'
  },
  {
    locale: 'de_LI',
    description: 'German (Liechtenstein)'
  },
  {
    locale: 'de_LU',
    description: 'German (Luxembourg)'
  },
  {
    locale: 'de_CH',
    description: 'German (Switzerland)'
  },
  {
    locale: 'de',
    description: 'German'
  },
  {
    locale: 'el_CY',
    description: 'Greek (Cyprus)'
  },
  {
    locale: 'el_GR',
    description: 'Greek (Greece)'
  },
  {
    locale: 'el',
    description: 'Greek'
  },
  {
    locale: 'gu_IN',
    description: 'Gujarati (India)'
  },
  {
    locale: 'gu',
    description: 'Gujarati'
  },
  {
    locale: 'guz_KE',
    description: 'Gusii (Kenya)'
  },
  {
    locale: 'guz',
    description: 'Gusii'
  },
  {
    locale: 'ha_Latn',
    description: 'Hausa (Latin)'
  },
  {
    locale: 'ha_Latn_GH',
    description: 'Hausa (Latin, Ghana)'
  },
  {
    locale: 'ha_Latn_NE',
    description: 'Hausa (Latin, Niger)'
  },
  {
    locale: 'ha_Latn_NG',
    description: 'Hausa (Latin, Nigeria)'
  },
  {
    locale: 'ha',
    description: 'Hausa'
  },
  {
    locale: 'haw_US',
    description: 'Hawaiian (United States)'
  },
  {
    locale: 'haw',
    description: 'Hawaiian'
  },
  {
    locale: 'he_IL',
    description: 'Hebrew (Israel)'
  },
  {
    locale: 'he',
    description: 'Hebrew'
  },
  {
    locale: 'hi_IN',
    description: 'Hindi (India)'
  },
  {
    locale: 'hi',
    description: 'Hindi'
  },
  {
    locale: 'hu_HU',
    description: 'Hungarian (Hungary)'
  },
  {
    locale: 'hu',
    description: 'Hungarian'
  },
  {
    locale: 'is_IS',
    description: 'Icelandic (Iceland)'
  },
  {
    locale: 'is',
    description: 'Icelandic'
  },
  {
    locale: 'ig_NG',
    description: 'Igbo (Nigeria)'
  },
  {
    locale: 'ig',
    description: 'Igbo'
  },
  {
    locale: 'id_ID',
    description: 'Indonesian (Indonesia)'
  },
  {
    locale: 'id',
    description: 'Indonesian'
  },
  {
    locale: 'ga_IE',
    description: 'Irish (Ireland)'
  },
  {
    locale: 'ga',
    description: 'Irish'
  },
  {
    locale: 'it_IT',
    description: 'Italian (Italy)'
  },
  {
    locale: 'it_CH',
    description: 'Italian (Switzerland)'
  },
  {
    locale: 'it',
    description: 'Italian'
  },
  {
    locale: 'ja_JP',
    description: 'Japanese (Japan)'
  },
  {
    locale: 'ja',
    description: 'Japanese'
  },
  {
    locale: 'kea_CV',
    description: 'Kabuverdianu (Cape Verde)'
  },
  {
    locale: 'kea',
    description: 'Kabuverdianu'
  },
  {
    locale: 'kab_DZ',
    description: 'Kabyle (Algeria)'
  },
  {
    locale: 'kab',
    description: 'Kabyle'
  },
  {
    locale: 'kl_GL',
    description: 'Kalaallisut (Greenland)'
  },
  {
    locale: 'kl',
    description: 'Kalaallisut'
  },
  {
    locale: 'kln_KE',
    description: 'Kalenjin (Kenya)'
  },
  {
    locale: 'kln',
    description: 'Kalenjin'
  },
  {
    locale: 'kam_KE',
    description: 'Kamba (Kenya)'
  },
  {
    locale: 'kam',
    description: 'Kamba'
  },
  {
    locale: 'kn_IN',
    description: 'Kannada (India)'
  },
  {
    locale: 'kn',
    description: 'Kannada'
  },
  {
    locale: 'kk_Cyrl',
    description: 'Kazakh (Cyrillic)'
  },
  {
    locale: 'kk_Cyrl_KZ',
    description: 'Kazakh (Cyrillic, Kazakhstan)'
  },
  {
    locale: 'kk',
    description: 'Kazakh'
  },
  {
    locale: 'km_KH',
    description: 'Khmer (Cambodia)'
  },
  {
    locale: 'km',
    description: 'Khmer'
  },
  {
    locale: 'ki_KE',
    description: 'Kikuyu (Kenya)'
  },
  {
    locale: 'ki',
    description: 'Kikuyu'
  },
  {
    locale: 'rw_RW',
    description: 'Kinyarwanda (Rwanda)'
  },
  {
    locale: 'rw',
    description: 'Kinyarwanda'
  },
  {
    locale: 'kok_IN',
    description: 'Konkani (India)'
  },
  {
    locale: 'kok',
    description: 'Konkani'
  },
  {
    locale: 'ko_KR',
    description: 'Korean (South Korea)'
  },
  {
    locale: 'ko',
    description: 'Korean'
  },
  {
    locale: 'khq_ML',
    description: 'Koyra Chiini (Mali)'
  },
  {
    locale: 'khq',
    description: 'Koyra Chiini'
  },
  {
    locale: 'ses_ML',
    description: 'Koyraboro Senni (Mali)'
  },
  {
    locale: 'ses',
    description: 'Koyraboro Senni'
  },
  {
    locale: 'lag_TZ',
    description: 'Langi (Tanzania)'
  },
  {
    locale: 'lag',
    description: 'Langi'
  },
  {
    locale: 'lv_LV',
    description: 'Latvian (Latvia)'
  },
  {
    locale: 'lv',
    description: 'Latvian'
  },
  {
    locale: 'lt_LT',
    description: 'Lithuanian (Lithuania)'
  },
  {
    locale: 'lt',
    description: 'Lithuanian'
  },
  {
    locale: 'luo_KE',
    description: 'Luo (Kenya)'
  },
  {
    locale: 'luo',
    description: 'Luo'
  },
  {
    locale: 'luy_KE',
    description: 'Luyia (Kenya)'
  },
  {
    locale: 'luy',
    description: 'Luyia'
  },
  {
    locale: 'mk_MK',
    description: 'Macedonian (Macedonia)'
  },
  {
    locale: 'mk',
    description: 'Macedonian'
  },
  {
    locale: 'jmc_TZ',
    description: 'Machame (Tanzania)'
  },
  {
    locale: 'jmc',
    description: 'Machame'
  },
  {
    locale: 'kde_TZ',
    description: 'Makonde (Tanzania)'
  },
  {
    locale: 'kde',
    description: 'Makonde'
  },
  {
    locale: 'mg_MG',
    description: 'Malagasy (Madagascar)'
  },
  {
    locale: 'mg',
    description: 'Malagasy'
  },
  {
    locale: 'ms_BN',
    description: 'Malay (Brunei)'
  },
  {
    locale: 'ms_MY',
    description: 'Malay (Malaysia)'
  },
  {
    locale: 'ms',
    description: 'Malay'
  },
  {
    locale: 'ml_IN',
    description: 'Malayalam (India)'
  },
  {
    locale: 'ml',
    description: 'Malayalam'
  },
  {
    locale: 'mt_MT',
    description: 'Maltese (Malta)'
  },
  {
    locale: 'mt',
    description: 'Maltese'
  },
  {
    locale: 'gv_GB',
    description: 'Manx (United Kingdom)'
  },
  {
    locale: 'gv',
    description: 'Manx'
  },
  {
    locale: 'mr_IN',
    description: 'Marathi (India)'
  },
  {
    locale: 'mr',
    description: 'Marathi'
  },
  {
    locale: 'mas_KE',
    description: 'Masai (Kenya)'
  },
  {
    locale: 'mas_TZ',
    description: 'Masai (Tanzania)'
  },
  {
    locale: 'mas',
    description: 'Masai'
  },
  {
    locale: 'mer_KE',
    description: 'Meru (Kenya)'
  },
  {
    locale: 'mer',
    description: 'Meru'
  },
  {
    locale: 'mfe_MU',
    description: 'Morisyen (Mauritius)'
  },
  {
    locale: 'mfe',
    description: 'Morisyen'
  },
  {
    locale: 'naq_NA',
    description: 'Nama (Namibia)'
  },
  {
    locale: 'naq',
    description: 'Nama'
  },
  {
    locale: 'ne_IN',
    description: 'Nepali (India)'
  },
  {
    locale: 'ne_NP',
    description: 'Nepali (Nepal)'
  },
  {
    locale: 'ne',
    description: 'Nepali'
  },
  {
    locale: 'nd_ZW',
    description: 'North Ndebele (Zimbabwe)'
  },
  {
    locale: 'nd',
    description: 'North Ndebele'
  },
  {
    locale: 'nb_NO',
    description: 'Norwegian Bokmål (Norway)'
  },
  {
    locale: 'nb',
    description: 'Norwegian Bokmål'
  },
  {
    locale: 'nn_NO',
    description: 'Norwegian Nynorsk (Norway)'
  },
  {
    locale: 'nn',
    description: 'Norwegian Nynorsk'
  },
  {
    locale: 'nyn_UG',
    description: 'Nyankole (Uganda)'
  },
  {
    locale: 'nyn',
    description: 'Nyankole'
  },
  {
    locale: 'or_IN',
    description: 'Oriya (India)'
  },
  {
    locale: 'or',
    description: 'Oriya'
  },
  {
    locale: 'om_ET',
    description: 'Oromo (Ethiopia)'
  },
  {
    locale: 'om_KE',
    description: 'Oromo (Kenya)'
  },
  {
    locale: 'om',
    description: 'Oromo'
  },
  {
    locale: 'ps_AF',
    description: 'Pashto (Afghanistan)'
  },
  {
    locale: 'ps',
    description: 'Pashto'
  },
  {
    locale: 'fa_AF',
    description: 'Persian (Afghanistan)'
  },
  {
    locale: 'fa_IR',
    description: 'Persian (Iran)'
  },
  {
    locale: 'fa',
    description: 'Persian'
  },
  {
    locale: 'pl_PL',
    description: 'Polish (Poland)'
  },
  {
    locale: 'pl',
    description: 'Polish'
  },
  {
    locale: 'pt_BR',
    description: 'Portuguese (Brazil)'
  },
  {
    locale: 'pt_GW',
    description: 'Portuguese (Guinea-Bissau)'
  },
  {
    locale: 'pt_MZ',
    description: 'Portuguese (Mozambique)'
  },
  {
    locale: 'pt_PT',
    description: 'Portuguese (Portugal)'
  },
  {
    locale: 'pt',
    description: 'Portuguese'
  },
  {
    locale: 'pa_Arab',
    description: 'Punjabi (Arabic)'
  },
  {
    locale: 'pa_Arab_PK',
    description: 'Punjabi (Arabic, Pakistan)'
  },
  {
    locale: 'pa_Guru',
    description: 'Punjabi (Gurmukhi)'
  },
  {
    locale: 'pa_Guru_IN',
    description: 'Punjabi (Gurmukhi, India)'
  },
  {
    locale: 'pa',
    description: 'Punjabi'
  },
  {
    locale: 'ro_MD',
    description: 'Romanian (Moldova)'
  },
  {
    locale: 'ro_RO',
    description: 'Romanian (Romania)'
  },
  {
    locale: 'ro',
    description: 'Romanian'
  },
  {
    locale: 'rm_CH',
    description: 'Romansh (Switzerland)'
  },
  {
    locale: 'rm',
    description: 'Romansh'
  },
  {
    locale: 'rof_TZ',
    description: 'Rombo (Tanzania)'
  },
  {
    locale: 'rof',
    description: 'Rombo'
  },
  {
    locale: 'ru_MD',
    description: 'Russian (Moldova)'
  },
  {
    locale: 'ru_RU',
    description: 'Russian (Russia)'
  },
  {
    locale: 'ru_UA',
    description: 'Russian (Ukraine)'
  },
  {
    locale: 'ru',
    description: 'Russian'
  },
  {
    locale: 'rwk_TZ',
    description: 'Rwa (Tanzania)'
  },
  {
    locale: 'rwk',
    description: 'Rwa'
  },
  {
    locale: 'saq_KE',
    description: 'Samburu (Kenya)'
  },
  {
    locale: 'saq',
    description: 'Samburu'
  },
  {
    locale: 'sg_CF',
    description: 'Sango (Central African Republic)'
  },
  {
    locale: 'sg',
    description: 'Sango'
  },
  {
    locale: 'seh_MZ',
    description: 'Sena (Mozambique)'
  },
  {
    locale: 'seh',
    description: 'Sena'
  },
  {
    locale: 'sr_Cyrl',
    description: 'Serbian (Cyrillic)'
  },
  {
    locale: 'sr_Cyrl_BA',
    description: 'Serbian (Cyrillic, Bosnia and Herzegovina)'
  },
  {
    locale: 'sr_Cyrl_ME',
    description: 'Serbian (Cyrillic, Montenegro)'
  },
  {
    locale: 'sr_Cyrl_RS',
    description: 'Serbian (Cyrillic, Serbia)'
  },
  {
    locale: 'sr_Latn',
    description: 'Serbian (Latin)'
  },
  {
    locale: 'sr_Latn_BA',
    description: 'Serbian (Latin, Bosnia and Herzegovina)'
  },
  {
    locale: 'sr_Latn_ME',
    description: 'Serbian (Latin, Montenegro)'
  },
  {
    locale: 'sr_Latn_RS',
    description: 'Serbian (Latin, Serbia)'
  },
  {
    locale: 'sr',
    description: 'Serbian'
  },
  {
    locale: 'sn_ZW',
    description: 'Shona (Zimbabwe)'
  },
  {
    locale: 'sn',
    description: 'Shona'
  },
  {
    locale: 'ii_CN',
    description: 'Sichuan Yi (China)'
  },
  {
    locale: 'ii',
    description: 'Sichuan Yi'
  },
  {
    locale: 'si_LK',
    description: 'Sinhala (Sri Lanka)'
  },
  {
    locale: 'si',
    description: 'Sinhala'
  },
  {
    locale: 'sk_SK',
    description: 'Slovak (Slovakia)'
  },
  {
    locale: 'sk',
    description: 'Slovak'
  },
  {
    locale: 'sl_SI',
    description: 'Slovenian (Slovenia)'
  },
  {
    locale: 'sl',
    description: 'Slovenian'
  },
  {
    locale: 'xog_UG',
    description: 'Soga (Uganda)'
  },
  {
    locale: 'xog',
    description: 'Soga'
  },
  {
    locale: 'so_DJ',
    description: 'Somali (Djibouti)'
  },
  {
    locale: 'so_ET',
    description: 'Somali (Ethiopia)'
  },
  {
    locale: 'so_KE',
    description: 'Somali (Kenya)'
  },
  {
    locale: 'so_SO',
    description: 'Somali (Somalia)'
  },
  {
    locale: 'so',
    description: 'Somali'
  },
  {
    locale: 'es_AR',
    description: 'Spanish (Argentina)'
  },
  {
    locale: 'es_BO',
    description: 'Spanish (Bolivia)'
  },
  {
    locale: 'es_CL',
    description: 'Spanish (Chile)'
  },
  {
    locale: 'es_CO',
    description: 'Spanish (Colombia)'
  },
  {
    locale: 'es_CR',
    description: 'Spanish (Costa Rica)'
  },
  {
    locale: 'es_DO',
    description: 'Spanish (Dominican Republic)'
  },
  {
    locale: 'es_EC',
    description: 'Spanish (Ecuador)'
  },
  {
    locale: 'es_SV',
    description: 'Spanish (El Salvador)'
  },
  {
    locale: 'es_GQ',
    description: 'Spanish (Equatorial Guinea)'
  },
  {
    locale: 'es_GT',
    description: 'Spanish (Guatemala)'
  },
  {
    locale: 'es_HN',
    description: 'Spanish (Honduras)'
  },
  {
    locale: 'es_419',
    description: 'Spanish (Latin America)'
  },
  {
    locale: 'es_MX',
    description: 'Spanish (Mexico)'
  },
  {
    locale: 'es_NI',
    description: 'Spanish (Nicaragua)'
  },
  {
    locale: 'es_PA',
    description: 'Spanish (Panama)'
  },
  {
    locale: 'es_PY',
    description: 'Spanish (Paraguay)'
  },
  {
    locale: 'es_PE',
    description: 'Spanish (Peru)'
  },
  {
    locale: 'es_PR',
    description: 'Spanish (Puerto Rico)'
  },
  {
    locale: 'es_ES',
    description: 'Spanish (Spain)'
  },
  {
    locale: 'es_US',
    description: 'Spanish (United States)'
  },
  {
    locale: 'es_UY',
    description: 'Spanish (Uruguay)'
  },
  {
    locale: 'es_VE',
    description: 'Spanish (Venezuela)'
  },
  {
    locale: 'es',
    description: 'Spanish'
  },
  {
    locale: 'sw_KE',
    description: 'Swahili (Kenya)'
  },
  {
    locale: 'sw_TZ',
    description: 'Swahili (Tanzania)'
  },
  {
    locale: 'sw',
    description: 'Swahili'
  },
  {
    locale: 'sv_FI',
    description: 'Swedish (Finland)'
  },
  {
    locale: 'sv_SE',
    description: 'Swedish (Sweden)'
  },
  {
    locale: 'sv',
    description: 'Swedish'
  },
  {
    locale: 'gsw_CH',
    description: 'Swiss German (Switzerland)'
  },
  {
    locale: 'gsw',
    description: 'Swiss German'
  },
  {
    locale: 'shi_Latn',
    description: 'Tachelhit (Latin)'
  },
  {
    locale: 'shi_Latn_MA',
    description: 'Tachelhit (Latin, Morocco)'
  },
  {
    locale: 'shi_Tfng',
    description: 'Tachelhit (Tifinagh)'
  },
  {
    locale: 'shi_Tfng_MA',
    description: 'Tachelhit (Tifinagh, Morocco)'
  },
  {
    locale: 'shi',
    description: 'Tachelhit'
  },
  {
    locale: 'dav_KE',
    description: 'Taita (Kenya)'
  },
  {
    locale: 'dav',
    description: 'Taita'
  },
  {
    locale: 'ta_IN',
    description: 'Tamil (India)'
  },
  {
    locale: 'ta_LK',
    description: 'Tamil (Sri Lanka)'
  },
  {
    locale: 'ta',
    description: 'Tamil'
  },
  {
    locale: 'te_IN',
    description: 'Telugu (India)'
  },
  {
    locale: 'te',
    description: 'Telugu'
  },
  {
    locale: 'teo_KE',
    description: 'Teso (Kenya)'
  },
  {
    locale: 'teo_UG',
    description: 'Teso (Uganda)'
  },
  {
    locale: 'teo',
    description: 'Teso'
  },
  {
    locale: 'th_TH',
    description: 'Thai (Thailand)'
  },
  {
    locale: 'th',
    description: 'Thai'
  },
  {
    locale: 'bo_CN',
    description: 'Tibetan (China)'
  },
  {
    locale: 'bo_IN',
    description: 'Tibetan (India)'
  },
  {
    locale: 'bo',
    description: 'Tibetan'
  },
  {
    locale: 'ti_ER',
    description: 'Tigrinya (Eritrea)'
  },
  {
    locale: 'ti_ET',
    description: 'Tigrinya (Ethiopia)'
  },
  {
    locale: 'ti',
    description: 'Tigrinya'
  },
  {
    locale: 'to_TO',
    description: 'Tonga (Tonga)'
  },
  {
    locale: 'to',
    description: 'Tonga'
  },
  {
    locale: 'tr_TR',
    description: 'Turkish (Turkey)'
  },
  {
    locale: 'tr',
    description: 'Turkish'
  },
  {
    locale: 'uk_UA',
    description: 'Ukrainian (Ukraine)'
  },
  {
    locale: 'uk',
    description: 'Ukrainian'
  },
  {
    locale: 'ur_IN',
    description: 'Urdu (India)'
  },
  {
    locale: 'ur_PK',
    description: 'Urdu (Pakistan)'
  },
  {
    locale: 'ur',
    description: 'Urdu'
  },
  {
    locale: 'uz_Arab',
    description: 'Uzbek (Arabic)'
  },
  {
    locale: 'uz_Arab_AF',
    description: 'Uzbek (Arabic, Afghanistan)'
  },
  {
    locale: 'uz_Cyrl',
    description: 'Uzbek (Cyrillic)'
  },
  {
    locale: 'uz_Cyrl_UZ',
    description: 'Uzbek (Cyrillic, Uzbekistan)'
  },
  {
    locale: 'uz_Latn',
    description: 'Uzbek (Latin)'
  },
  {
    locale: 'uz_Latn_UZ',
    description: 'Uzbek (Latin, Uzbekistan)'
  },
  {
    locale: 'uz',
    description: 'Uzbek'
  },
  {
    locale: 'vi_VN',
    description: 'Vietnamese (Vietnam)'
  },
  {
    locale: 'vi',
    description: 'Vietnamese'
  },
  {
    locale: 'vun_TZ',
    description: 'Vunjo (Tanzania)'
  },
  {
    locale: 'vun',
    description: 'Vunjo'
  },
  {
    locale: 'cy_GB',
    description: 'Welsh (United Kingdom)'
  },
  {
    locale: 'cy',
    description: 'Welsh'
  },
  {
    locale: 'yo_NG',
    description: 'Yoruba (Nigeria)'
  },
  {
    locale: 'yo',
    description: 'Yoruba'
  },
  {
    locale: 'zu_ZA',
    description: 'Zulu (South Africa)'
  },
  {
    locale: 'zu',
    description: 'Zulu'
  }
];

export default localeOptions;

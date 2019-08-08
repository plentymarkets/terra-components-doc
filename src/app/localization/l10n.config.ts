import {
    L10nConfig,
    ProviderType,
    StorageStrategy
} from 'angular-l10n';

export const l10nConfig:L10nConfig = {
    locale:      {
        languages: [
            {
                code: 'en',
                dir:  'ltr'
            },
            {
                code: 'de',
                dir:  'ltr'
            }
        ],
        language:  'en',
        storage:   StorageStrategy.Disabled
    },
    translation: {
        providers:            [
            {
                type:   ProviderType.Static,
                prefix: 'assets/lang/locale-'
            },
            {
                type:   ProviderType.Static,
                prefix: 'assets/lang/terra-components/locale-'
            }
        ],
        caching:              true,
        composedKeySeparator: '.',
        i18nPlural:           false
    }
};

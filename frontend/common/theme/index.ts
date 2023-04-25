import { MantineThemeOverride } from '@mantine/core'
import 'dayjs/locale/ja'

export const emsTheme: MantineThemeOverride = {
    colorScheme: 'light',

    primaryColor: 'blue',

    shadows: {
        sm: '1px 1px 3px rgba(0, 0, 0, .25)',
        xl: '5px 5px 3px rgba(0, 0, 0, .25)',
    },

    primaryShade: 7,

    headings: {
        fontFamily: 'Roboto, sans-serif',
        sizes: {
            h1: { fontSize: '2rem' },
        },
    },

    components: {
        Button: {
            defaultProps: {
                size: 'xs',
            },
        },
        Modal: {
            defaultProps: {
                closeOnClickOutside: false,
            },
        },
        Text: {
            defaultProps: {
                size: 'xs',
            },
        },
        DateInput: {
            defaultProps: {
                allowDeselect: true,
                valueFormat: 'YYYY年M月D日',
                placeholder: '20230101',
                locale: 'ja',
                mx: 'auto',
                size: 'xs',
            },
        },
        DatePickerInput: {
            defaultProps: {
                allowDeselect: true,
                valueFormat: 'YYYY年M月D日',
                locale: 'ja',
                mx: 'auto',
                size: 'xs',
            },
        },
        MonthPickerInput: {
            defaultProps: {
                allowDeselect: true,
                valueFormat: 'YYYY年 M月',
                locale: 'ja',
                size: 'xs',
                mx: 'auto',
            },
        },
        TimeInput: {
            defaultProps: {
                size: 'xs',
            },
        },
        Textarea: {
            defaultProps: {
                size: 'xs',
                autosize: true,
                minRows: 2,
                maxRows: 8,
                maxLength: 300,
            },
        },
        TextInput: {
            defaultProps: {
                size: 'xs',
                maxLength: 30,
            },
        },
        Checkbox: {
            defaultProps: {
                size: 'xs',
            },
        },
        RadioGroup: {
            defaultProps: {
                size: 'xs',
            },
        },
        Select: {
            defaultProps: {
                // dropdownPosition: 'buttom',
                size: 'xs',
                clearable: true,
            },
        },
        NumberInput: {
            defaultProps: {
                size: 'xs',
            },
        },
        Divider: {
            defaultProps: {
                my: 'xs',
                labelPosition: 'center',
            },
        },
        Input: {
            defaultProps: {
                size: 'xs',
            },
        },
        InputWrapper: {
            defaultProps: {
                size: 'xs',
            },
        },
        Paper: {
            defaultProps: {
                shadow: 'xs',
                p: 'sm',
            },
        },
    },
}

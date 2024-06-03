
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

// Primary #ff1b1b, Black
// Secondary #0958be, White
// Tertiary #84396c, White
// Success #84cc16, Black
// Warning #EAB308, Black
// Error #D41976, White
// Surface #62498f, White
// Base Mono, Headings Sans
// Text Colours Black, White
// Border Radius 4px, 4px
// Border Size 2px

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ff1b1b 
		"--color-primary-50": "255 221 221", // #ffdddd
		"--color-primary-100": "255 209 209", // #ffd1d1
		"--color-primary-200": "255 198 198", // #ffc6c6
		"--color-primary-300": "255 164 164", // #ffa4a4
		"--color-primary-400": "255 95 95", // #ff5f5f
		"--color-primary-500": "255 27 27", // #ff1b1b
		"--color-primary-600": "230 24 24", // #e61818
		"--color-primary-700": "191 20 20", // #bf1414
		"--color-primary-800": "153 16 16", // #991010
		"--color-primary-900": "125 13 13", // #7d0d0d
		// secondary | #0958be 
		"--color-secondary-50": "218 230 245", // #dae6f5
		"--color-secondary-100": "206 222 242", // #cedef2
		"--color-secondary-200": "194 213 239", // #c2d5ef
		"--color-secondary-300": "157 188 229", // #9dbce5
		"--color-secondary-400": "83 138 210", // #538ad2
		"--color-secondary-500": "9 88 190", // #0958be
		"--color-secondary-600": "8 79 171", // #084fab
		"--color-secondary-700": "7 66 143", // #07428f
		"--color-secondary-800": "5 53 114", // #053572
		"--color-secondary-900": "4 43 93", // #042b5d
		// tertiary | #84396c 
		"--color-tertiary-50": "237 225 233", // #ede1e9
		"--color-tertiary-100": "230 215 226", // #e6d7e2
		"--color-tertiary-200": "224 206 218", // #e0ceda
		"--color-tertiary-300": "206 176 196", // #ceb0c4
		"--color-tertiary-400": "169 116 152", // #a97498
		"--color-tertiary-500": "132 57 108", // #84396c
		"--color-tertiary-600": "119 51 97", // #773361
		"--color-tertiary-700": "99 43 81", // #632b51
		"--color-tertiary-800": "79 34 65", // #4f2241
		"--color-tertiary-900": "65 28 53", // #411c35
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #D41976 
		"--color-error-50": "249 221 234", // #f9ddea
		"--color-error-100": "246 209 228", // #f6d1e4
		"--color-error-200": "244 198 221", // #f4c6dd
		"--color-error-300": "238 163 200", // #eea3c8
		"--color-error-400": "225 94 159", // #e15e9f
		"--color-error-500": "212 25 118", // #D41976
		"--color-error-600": "191 23 106", // #bf176a
		"--color-error-700": "159 19 89", // #9f1359
		"--color-error-800": "127 15 71", // #7f0f47
		"--color-error-900": "104 12 58", // #680c3a
		// surface | #62498f 
		"--color-surface-50": "231 228 238", // #e7e4ee
		"--color-surface-100": "224 219 233", // #e0dbe9
		"--color-surface-200": "216 210 227", // #d8d2e3
		"--color-surface-300": "192 182 210", // #c0b6d2
		"--color-surface-400": "145 128 177", // #9180b1
		"--color-surface-500": "98 73 143", // #62498f
		"--color-surface-600": "88 66 129", // #584281
		"--color-surface-700": "74 55 107", // #4a376b
		"--color-surface-800": "59 44 86", // #3b2c56
		"--color-surface-900": "48 36 70", // #302446
		
	}
}
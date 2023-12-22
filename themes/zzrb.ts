import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const zzrbTheme: CustomThemeConfig = {
	name: 'zzrb-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '255 255 255',
		'--on-warning': '255 255 255',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #637db0
		'--color-primary-50': '232 236 243', // #e8ecf3
		'--color-primary-100': '224 229 239', // #e0e5ef
		'--color-primary-200': '216 223 235', // #d8dfeb
		'--color-primary-300': '193 203 223', // #c1cbdf
		'--color-primary-400': '146 164 200', // #92a4c8
		'--color-primary-500': '99 125 176', // #637db0
		'--color-primary-600': '89 113 158', // #59719e
		'--color-primary-700': '74 94 132', // #4a5e84
		'--color-primary-800': '59 75 106', // #3b4b6a
		'--color-primary-900': '49 61 86', // #313d56
		// secondary | #8fccc5
		'--color-secondary-50': '238 247 246', // #eef7f6
		'--color-secondary-100': '233 245 243', // #e9f5f3
		'--color-secondary-200': '227 242 241', // #e3f2f1
		'--color-secondary-300': '210 235 232', // #d2ebe8
		'--color-secondary-400': '177 219 214', // #b1dbd6
		'--color-secondary-500': '143 204 197', // #8fccc5
		'--color-secondary-600': '129 184 177', // #81b8b1
		'--color-secondary-700': '107 153 148', // #6b9994
		'--color-secondary-800': '86 122 118', // #567a76
		'--color-secondary-900': '70 100 97', // #466461
		// tertiary | #a5c78a
		'--color-tertiary-50': '242 247 237', // #f2f7ed
		'--color-tertiary-100': '237 244 232', // #edf4e8
		'--color-tertiary-200': '233 241 226', // #e9f1e2
		'--color-tertiary-300': '219 233 208', // #dbe9d0
		'--color-tertiary-400': '192 216 173', // #c0d8ad
		'--color-tertiary-500': '165 199 138', // #a5c78a
		'--color-tertiary-600': '149 179 124', // #95b37c
		'--color-tertiary-700': '124 149 104', // #7c9568
		'--color-tertiary-800': '99 119 83', // #637753
		'--color-tertiary-900': '81 98 68', // #516244
		// success | #9cbed3
		'--color-success-50': '240 245 248', // #f0f5f8
		'--color-success-100': '235 242 246', // #ebf2f6
		'--color-success-200': '230 239 244', // #e6eff4
		'--color-success-300': '215 229 237', // #d7e5ed
		'--color-success-400': '186 210 224', // #bad2e0
		'--color-success-500': '156 190 211', // #9cbed3
		'--color-success-600': '140 171 190', // #8cabbe
		'--color-success-700': '117 143 158', // #758f9e
		'--color-success-800': '94 114 127', // #5e727f
		'--color-success-900': '76 93 103', // #4c5d67
		// warning | #a03149
		'--color-warning-50': '241 224 228', // #f1e0e4
		'--color-warning-100': '236 214 219', // #ecd6db
		'--color-warning-200': '231 204 210', // #e7ccd2
		'--color-warning-300': '217 173 182', // #d9adb6
		'--color-warning-400': '189 111 128', // #bd6f80
		'--color-warning-500': '160 49 73', // #a03149
		'--color-warning-600': '144 44 66', // #902c42
		'--color-warning-700': '120 37 55', // #782537
		'--color-warning-800': '96 29 44', // #601d2c
		'--color-warning-900': '78 24 36', // #4e1824
		// error | #e31a62
		'--color-error-50': '251 221 231', // #fbdde7
		'--color-error-100': '249 209 224', // #f9d1e0
		'--color-error-200': '248 198 216', // #f8c6d8
		'--color-error-300': '244 163 192', // #f4a3c0
		'--color-error-400': '235 95 145', // #eb5f91
		'--color-error-500': '227 26 98', // #e31a62
		'--color-error-600': '204 23 88', // #cc1758
		'--color-error-700': '170 20 74', // #aa144a
		'--color-error-800': '136 16 59', // #88103b
		'--color-error-900': '111 13 48', // #6f0d30
		// surface | #767476
		'--color-surface-50': '234 234 234', // #eaeaea
		'--color-surface-100': '228 227 228', // #e4e3e4
		'--color-surface-200': '221 220 221', // #dddcdd
		'--color-surface-300': '200 199 200', // #c8c7c8
		'--color-surface-400': '159 158 159', // #9f9e9f
		'--color-surface-500': '118 116 118', // #767476
		'--color-surface-600': '106 104 106', // #6a686a
		'--color-surface-700': '89 87 89', // #595759
		'--color-surface-800': '71 70 71', // #474647
		'--color-surface-900': '58 57 58' // #3a393a
	}
};

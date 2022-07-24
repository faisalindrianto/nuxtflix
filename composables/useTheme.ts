import { GlobalThemeOverrides } from 'naive-ui'

const useTheme = () => {
  const themeOverrides: GlobalThemeOverrides = {
    common: {
      primaryColor: '#E50914',
      primaryColorHover: '#f23c42'
    }
  }

  return { themeOverrides }
}

export default useTheme

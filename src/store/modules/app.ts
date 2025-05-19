import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { useStorage } from '@vueuse/core'

const locales = {
  en_US: { name: 'English' },
  zh_CN: { name: '简体中文' }
}

export const useAppStore = defineStore('app', () => {
  const sidebarStatus = useStorage('sidebarStatus', '1');
  const sidebar = reactive({
    opened: sidebarStatus.value ? !!+sidebarStatus.value : true,
    withoutAnimation: false,
    hide: false
  });
  const device = ref<string>('desktop');
  const size = useStorage<'large' | 'default' | 'small'>('size', 'default');

  // 语言
  const language = useStorage('language', 'zh_CN');
  const locale = computed(() => {
    return locales[language.value as keyof typeof locales];
  });

  const toggleSideBar = (withoutAnimation: boolean) => {
    if (sidebar.hide) {
      return false;
    }

    sidebar.opened = !sidebar.opened;
    sidebar.withoutAnimation = withoutAnimation;
    if (sidebar.opened) {
      sidebarStatus.value = '1';
    } else {
      sidebarStatus.value = '0';
    }
  };

  const closeSideBar = ({ withoutAnimation }: any): void => {
    sidebarStatus.value = '0';
    sidebar.opened = false;
    sidebar.withoutAnimation = withoutAnimation;
  };
  const toggleDevice = (d: string): void => {
    device.value = d;
  };
  const setSize = (s: 'large' | 'default' | 'small'): void => {
    size.value = s;
  };
  const toggleSideBarHide = (status: boolean): void => {
    sidebar.hide = status;
  };

  const changeLanguage = (val: string): void => {
    language.value = val;
  };

  return {
    device,
    sidebar,
    language,
    locale,
    size,
    changeLanguage,
    toggleSideBar,
    closeSideBar,
    toggleDevice,
    setSize,
    toggleSideBarHide
  };
});

export default useAppStore;

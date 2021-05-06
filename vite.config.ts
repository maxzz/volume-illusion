import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default ({command}) => {
    return defineConfig({
        base: command === 'build' ? '' : '',
        // GitHub allows relative hosting path
        // base: command === 'build' ? '/volume-illusion/' : '',
        plugins: [reactRefresh()]
    });
};

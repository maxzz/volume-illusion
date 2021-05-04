import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default (command: string) => {
    return defineConfig({
        base: command === 'build' ? '/volume-illusion/' : '',
        plugins: [reactRefresh()]
    });
};

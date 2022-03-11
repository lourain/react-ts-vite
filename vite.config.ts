import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compressDist, { CompressOptions } from 'rollup-plugin-compress-dist';

const compressOpts: CompressOptions<'tgz'> = {
  type: 'tgz',
  archiverName: '../lyw.tar.gz',
  sourceName: 'dist',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compressDist(compressOpts)],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});

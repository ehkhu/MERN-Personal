// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import eslintPlugin from 'vite-plugin-eslint'

// export default defineConfig({
//   plugins: [
//     react(),
//     eslintPlugin({
//       cache: false,
//       include: ['./src/**/*.js', './src/**/*.jsx'],
//       exclude: [],
//     }),
//   ],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {target:"http://localhost:8000",
  //     changeOrigin:true,
  //     secure:false,
  //     rewrite:(path)=>path.replace(/^\/api/,""),
  //   }

  //   }  
  // } ,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
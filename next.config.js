const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

module.exports = () => {
  /** @type {import('next').NextConfig} */
  
  const config = {
    transpilePackages: ['core'],
    images: {

      domains: ['nmdevbucket101.s3.ap-south-1.amazonaws.com','api.backend.nerdmine.in',
      'nmbucket2806.s3.ap-south-1.amazonaws.com','bucket-fbxk91.s3.ap-south-1.amazonaws.com',
      'img.freepik.com','cdn.pixabay.com','nerdmine.s3.ap-south-1.amazonaws.com','cdn2.iconfinder.com'],
    },
  };


  return withBundleAnalyzer(config);
}

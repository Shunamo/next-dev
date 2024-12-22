module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*', // 클라이언트가 요청하는 URL
                destination: 'http://ec2-3-36-66-71.ap-northeast-2.compute.amazonaws.com/:8080/:path*', // HTTP 서버 주소
            },
        ];
    },
};

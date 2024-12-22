module.exports = {
    async rewrites() {
        return [
            {
                source: '/api/:path*', // 클라이언트가 요청하는 URL
                destination: 'http://127.0.0.1/:8080/:path*', // HTTP 서버 주소
            },
        ];
    },
};

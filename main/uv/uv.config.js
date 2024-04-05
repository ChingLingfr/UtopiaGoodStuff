self.__uv$config = {
    prefix: '/service/',
    bare: 'https://vercel-bare-server-psi.vercel.app/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    index: '/uv/uv.index.js',
    sw: '/uv/uv.sw.js',
};

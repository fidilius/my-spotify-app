import { rest } from 'msw';

export const handlers = [rest.get('https://api.spotify.com/v1/search?q=test&type=track&limit=10', (req, res, ctx) => {
    return res(ctx.json({
        data : {
            tracks : {
                items : [
                    {
                        id: 'test',
                        name: 'test',
                        artists: [
                            {
                                name: 'test',
                            }
                        ],
                        album: {
                            images: [
                                {
                                    url: 'test',
                                }
                            ],
                            name: 'test',
                        },
                        uri: 'test',
                        duration_ms: 0,
                    }
                ]
            }
        }
    }))
})]
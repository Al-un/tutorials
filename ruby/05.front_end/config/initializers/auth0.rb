Rails.application.config.middleware.use OmniAuth::Builder do
    provider(
        :auth0,
        'SlShtabDp6zvZlHMBJPBlBmXdaa4yPYI', # client ID
        '-3QWLmg-X0MIv5cp9AUV8xRsS2s7BKDPIIyrMdkwiEfbs3U1Xle1zDK_zmjx4Ze2', # client secret
        'al-un-playground.eu.auth0.com', # domain
        callback_path: '/auth/oauth2/callback',
        authorize_params: {
            scope: 'openid profile'
        }
    )
end
const app_url = process.env.LOCAL_URL

export const generateUrl = ({ src }) => `${app_url}${src}`

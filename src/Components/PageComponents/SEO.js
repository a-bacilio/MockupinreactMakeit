import { Helmet } from "react-helmet";

const SEO = () => {
    return (
        <Helmet>
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@0,500;0,600;1,500;1,600&family=Metrophobic&family=Roboto:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" />
        </Helmet>
    )
}


export const PageTitle = ({ children=<></> }) => {
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    )
}


export default SEO;
import page from './page'
import { sections } from './contentSections'
import customImage from './customImage'
import customLink from './customLink'
import customRichText from './customRichText'

const schemas = [page, customImage, customLink, customRichText,  ...sections]

export default schemas

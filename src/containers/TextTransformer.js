import { connect } from 'react-redux'
import TextTransformer from '../components/TextTransformer'
import { transformToLowerCase, transformToUpperCase } from '../store/textTransform'

const mapStateToProps = state => ({
    transformedValue: state.textTransform.transformedValue,
    error: state.textTransform.error,
    status: state.textTransform.status,
    isLoading: state.textTransform.isLoading
})

export default connect(mapStateToProps, { transformToLowerCase, transformToUpperCase })(TextTransformer)
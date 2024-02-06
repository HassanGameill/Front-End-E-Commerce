import CategoryContainer from '../../../Components/Categories/Category-Container/CategoryContainer'
import Pagination from '../../../Components/Utilities/Pagination/Pagination'
import './AllCategoryPage.css'

function AllCategoryPage() {
  return (
    <div className='container' style={{ minHeight: "670px"}}>
      <h1>Welcome In All Category</h1>

      <CategoryContainer />
      <Pagination />
      
    </div>
  )
}

export default AllCategoryPage

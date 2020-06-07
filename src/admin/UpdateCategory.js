import React, {useState, useEffect} from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { getCategories, getCategory, updateCategory, createCategory, createProduct } from './helper/adminapicall'
import { isAutheticated } from '../auth/helper/index'

const UpdateCategory = ({match}) => {

    const { user, token } = isAutheticated()

    const [ values , setValues] = useState({
          name : "",
         loading : false,
         error : "",
         createdCategory : "",
         getRedirect : "",
         formData : ""
    })

    const { name, loading, error, createdCategory, getRedirect } = values

    const preload = (categoryId) => {
        getCategory(categoryId).then( data => {
            if(data.error){
                setValues({...values, error : data.error})
            }
            else{
                setValues({
                    ...values,
                    name : data.name,

                })
            }
        })
    }


    useEffect(() => {
        preload(match.params.categoryId)
    }, [])

  
        const handleChange = name => event => {
            const value = name === "name" === event.target.value 
            setValues({ ...values, error: false, [name]: value });
          };

    

    const onSubmit = event => {
        event.preventDefault()
        setValues({ ...values, error: "", loading : true})
        updateCategory(match.params.categoryId, user._id, token)
        .then( data => {
            if(data.error){
                setValues({...values, error : data.error})
            }
            else {
                setValues( {
                    ...values,
                    name : "",
                    loading : false,
                    createdCategory : data.name
                })
            }
        }) 
        .catch()
    }


    // const errorMessage = () => {
        
    //     return (
    //         <div className = "alert alert-danger mt-3" style = {{ display : error ? "" : "none"}}>
    //             <h4> Cannot create category</h4>
    //         </div>
    //     )
    // }

    
    const successMessage = () => {
        
        return (<div className = "alert alert-success mt-3" style = {{ display : createdCategory ? " ": "none"}}>
            <h4>{createCategory} updated successfully</h4>
        </div>
        )
    }

    const createCategoryForm = () => (
        <form>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
            />
            </div>
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success">
            Update Product
          </button>
        </form>
      );

    return(
        <Base title = "Update Category" description = "Category Creation Section" className = "container bg-info p-4">
            <Link to = "/admin/dashboard" className = "btn btn-md btn-dark mb-3">
                Admin Home
            </Link>
            <div className = "row bg-dark text-white rounded">
                <div className = "col md-8 offset-md-2">
                    {successMessage()}
                    {/* {errorMessage()} */}
                    {createCategoryForm()}
                </div>
            </div>
        </Base>

    )
}

export default UpdateCategory
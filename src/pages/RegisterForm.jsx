import  Form  from "react-bootstrap/Form";
import  Button  from "react-bootstrap/Button";
import axios from "axios"; 
import useState from 'react'; 

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })

    const handleChange = (e) => {
        // used to create a new object and overided "name" with "value"
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // handleSubmit function sends a POST request to the /api/register endpoint 
    const handleSubmit = async (e) =>{
        //prevents the default behavior of the form submission event
        e.preventDefault();
        try{
            // sends a POST request to endpoint
            const response = await axios.post("/api/register", formData);
            console.log(response.data);
        } catch (error){
            console.error("Registration failed", error);
        }
    };

    return ( 
        <div className="register-container"  >  
         <div className="register-content"> 
                <Form onSubmit={handleSubmit} >
                    <h1>Register</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            placeholder="Enter email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
         </div>
        </div>  
      
    ); 
};

export default RegisterForm; 
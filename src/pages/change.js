import Footer from "@/components/footer";
import Header from "@/components/header";
import { useState, } from "react";
import { useAuth } from "../components/auth";
import { updateUser } from "./api/auth";



function Change() {
  const { user, logout, login } = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateUserData = async () => {
    try {
      user.firstname = formData.firstname
      user.lastname = formData.lastname
      login(user)
      updateUser(user.email, formData)
    } catch (error) {
      console.error('Error al actualizar los datos:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserData();
    setEditMode(false);
  };

  return (
    <div className="main">
      <Header />
      <div className="container">
        <h1>
          Edita tus datos <br />
          {user ? (
            <>
              <div>
                {editMode ? (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      placeholder="Nuevo nombre"
                    />
                    <input
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      placeholder="Nuevo apellido"
                    />
                    <button type="submit">Guardar</button>
                  </form>
                ) : (
                  <>
  {user.firstname} {user.lastname}
  <button
    onClick={() => setEditMode(true)}
    style={{
      padding: "10px 20px",
      backgroundColor: "transparent ",
      color: "black",
      border: "solid",
      borderRadius: "5px",
      cursor: "pointer",
      marginLeft: "30px",
      
    }}
  >
    Editar
  </button>
</>
                )}
              </div>
            </>
          ) : null}
        </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Change;

import { useParams } from 'react-router';

function DetailsPage() {
      const { id ,name,age} = useParams();
      return (
            <>
                  <div className="about">
                        <h1>DetailsPage  </h1>
                        <br />
                        <br />
                        <p>Details Page id: {id} </p>
                        <p>Details Page name: {name} </p>
                        <p>Details Page age: {age} </p>
                  </div>
            </>
      )
}
export default DetailsPage
import { Api } from "../api/api";

export function Products() {
    const { data, isLoading, isError } = Api(
        "https://api.noroff.dev/api/v1/online-shop"
      );
    
      if (isLoading) {
        return <div>isLoading</div>
      }
    
      if (isError) {
        return (
          <div>
            <div>Error</div>
            <div>Bitch</div>
          </div>
        )
      }
    return (
        <div>
            <div>{data.title}</div>
            <div>{data.imageUrl}</div>
            <div>{data.price}</div>
        </div>
    )
}
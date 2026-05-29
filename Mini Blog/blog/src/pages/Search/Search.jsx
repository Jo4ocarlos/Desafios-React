//css
import styles from './Search.module.css'
//hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
//components
import Posts from "../../components/Posts/Posts";
const Search = () => {
    const query = useQuery()
    const search = query.get('q')

    const {documents:posts} = useFetchDocuments('posts', search)
    console.log(posts)
    
  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
    
      {posts && (
        <Posts posts={posts}/>
        )}
    </div>
  );
};

export default Search;

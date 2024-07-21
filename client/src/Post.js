export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2024/07/dyson-ontrac-headphones.jpg?w=1024"
          alt=""
        />
      </div>

      <div className="texts">
        <h2>Dyson’s new OnTrac headphones don’t purify air</h2>
        <p className="info">
          <a className="author">Ian</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          If your top concern for a pair of headphones is how well they filter
          the air, Dyson’s OnTrac aren’t for you. In fact, the new over-ear
          headphones don’t filter air at all.
        </p>
      </div>
    </div>
  );
}

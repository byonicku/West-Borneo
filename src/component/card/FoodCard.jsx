export default function FoodCard(item) {
  <div class="card-flyer" style={{ width: "18rem", height: "20rem" }}>
    <div class="text-box">
      <div class="image-box">
        <img src={item.image} alt="" />
      </div>
      <div class="text-container">
        <h6>{item.name}</h6>
        <p>{item.description}</p>
      </div>
    </div>
  </div>;
}

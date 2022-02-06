import { FaSearchLocation } from "react-icons/fa";
function ChangeModal() {
  return (
    <div>
      <label
        htmlFor="my-modal-2"
        className="btn btn-primary btn-block rounded-3xl modal-button"
      >
        <span>
          <FaSearchLocation className="mr-2" size="20px" />
        </span>
        Change Location
      </label>
      <input type="checkbox" id="my-modal-2" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <p>
            Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut
            adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea
            quasi eligendi. Saepe velit autem minima.
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-2" className="btn btn-primary">
              Accept
            </label>
            <label htmlFor="my-modal-2" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeModal;

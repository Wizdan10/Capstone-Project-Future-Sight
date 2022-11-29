// import PropTypes from "prop-types"
import { IoIosSchool } from "react-icons/io";
import { RiBook2Fill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { favoriteData } from "../utils/dataset";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnlikeButton";
// import { IconName } from "react-icons/fi";
function DetailProfesi({
  id,
  favorite,
  onFavorite,
  job_title,
  job_description,
  education_level,
  salary,
  youtube,
  education_major,
}) {
  const profesi = JSON.parse(localStorage.getItem("profesi-array")) || [];
  const findProf = (profID) => {
    for (const index in profesi) {
      if (profesi[index].id === profID) return index;
    }
  };

  const booleanProf = (profID) => {
    const profTarget = findProf(profID);
    if (profTarget == null) return;
    profTarget.favorite = false;
    localStorage.setItem("profesi-array", JSON.stringify(profesi));
  };

  const onFavoriteButtonHandler = (id, isFavorite) => {
    const unFavoriteData = JSON.parse(localStorage.getItem("profesi-array"));
    const favoriteData = JSON.parse(localStorage.getItem("favorite-array"));
    if (!isFavorite) {
      const currentData = unFavoriteData.filter((data) => data.id);
      const finalUnFavoriteData = unFavoriteData.filter((data) => data.id !== id)
      
      localStorage.setItem("profesi-array", JSON.stringify(finalUnFavoriteData));
      favoriteData.push(currentData);
      localStorage.setItem("favorite-array", JSON.stringify(favoriteData));
    } else {
      const currentData = favoriteData.filter((data) => data.id);
      const finalFavoriteData = favoriteData.filter((data) => data.id !== id)
      
      localStorage.setItem("favorite-array", JSON.stringify(finalFavoriteData));
      unFavoriteData.push(currentData);
      localStorage.setItem("favorite-array", JSON.stringify(unFavoriteData));
    }
  };

  const remove = (id) => {};

  return (
    <div className="detail-profesi text-dark">
      <div className="text-content">
        <div className="profesi-title">
          <h1>{job_title}</h1>
        </div>

        {/* deskripsi profesi */}
        <div className="job-describe">
          <p>{job_description}</p>
        </div>

        {/* syarat pendidikan */}
        <div className="education-type">
          <IoIosSchool className="icon" value={{ size: 28 }} />
          <p>{education_level}</p>
        </div>

        {/* jurusan yang diperlukan */}
        <div className="education-major">
          <RiBook2Fill className="icon" />
          <p>{education_major}</p>
        </div>

        {/* kisaran gaji */}
        <div className="salary-job">
          <RiMoneyDollarCircleFill className="icon" />
          <p>Kisaran gaji: Rp{salary}</p>
        </div>
      </div>

      {/* video youtube pembahasan profesi */}
      <div className="video-content">
        <iframe
          className="video"
          src={youtube}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div className="likeContainer">
        {favorite === false ? (
          <UnlikeButton id={id} onFavorite={onFavoriteButtonHandler} />
        ) : (
          <LikeButton id={id} unFavorite={onFavoriteButtonHandler} />
        )}
      </div>
    </div>
  );
}

// propTypes tambahin disini

export default DetailProfesi;

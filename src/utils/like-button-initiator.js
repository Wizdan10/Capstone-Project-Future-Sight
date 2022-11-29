import FavoriteProfDb from '../data/favorite-prof-idb';
import { likeButtonTemplate, likedButtonTemplate } from '../views/template/template-creator';

const LikeButtonInitiator = {
  async init({ likeContainer, prof }) {
    this._likeContainer = likeContainer;
    this._prof = prof;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._prof;

    if (await this._isProfExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isProfExist(id) {
    const prof = await FavoriteProfDb.getProf(id);
    return !!prof;
  },

  _renderLike() {
    this._likeContainer.innerHTML = likeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteProfDb.putProf(this._prof);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeContainer.innerHTML = likedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteProfDb.deleteProf(this._prof.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

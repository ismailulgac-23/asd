import { create } from "zustand";

const useModalStore = create((get, set) => ({
   cart: false,
   wishlist: false,
   mobileMenu: false,
   categoriesMenu: false,
   productComment: false,
}));

const settingBodyClasses = () => {
   document.querySelector("body").classList.toggle("overflow-hidden");
}

export const toggleCartModal = (payload = undefined) => {
   settingBodyClasses();
   const state = useModalStore.getState();
   useModalStore.setState({
      cart: payload ?? !state.cart
   });
}
export const toggleWishlistModal = (payload = undefined) => {
   settingBodyClasses();
   const state = useModalStore.getState();
   useModalStore.setState({
      wishlist: payload ?? !state.wishlist
   });
}
export const toggleCommentModal = (payload = undefined) => {
   settingBodyClasses();
   const state = useModalStore.getState();
   useModalStore.setState({
      productComment: payload ?? !state.productComment
   });
}
export const toggleMobileMenu = (payload = undefined) => {
   settingBodyClasses();
   const state = useModalStore.getState();
   useModalStore.setState({
      mobileMenu: payload ?? !state.mobileMenu
   });
}
export const toggleCategoriesMenu = (payload = undefined) => {
   const state = useModalStore.getState();
   useModalStore.setState({
      categoriesMenu: payload ?? !state.categoriesMenu
   });
}
export default useModalStore;
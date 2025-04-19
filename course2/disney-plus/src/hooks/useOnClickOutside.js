import { useEffect } from 'react'

export default function useOnClickOutside(ref, handler) {
  useEffect(() => {
    // 모달창 밖을 클릭하면 콜백함수를 호출하는 이벤트 등록
    const listener = (e) => {
      // 클릭 시 모달창 안이면 return
      if (!ref.current || ref.current.contains(e.target)) return
      handler()
    }
    // 클릭하는 경우
    document.addEventListener('mousedown', listener)
    // 손으로 클릭하는 경우
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [handler])
}

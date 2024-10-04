import React from 'react'
import cls from "classnames";

const Alert = ({ title, content, color }) => {
   return (
      <div className={cls(color,'px-4 py-2 rounded-md text-sm')}>
         {title && <h1>{title}</h1>}
         {content && <p>{content}</p>}
      </div>
   )
}

export default Alert

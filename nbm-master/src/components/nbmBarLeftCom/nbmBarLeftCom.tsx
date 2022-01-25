import React from "react";
import "./nbmBarLeftCom.css";
import { useSelector } from "../../redux/hooks";

export const BarLeftComponent = (items) => {
  const { secondLevelCategoryVOS } = items.items;
  //   console.log(secondLevelCategoryVOS);
  const zindex = items.zindex;

  const display = useSelector((state) => state.barLeft.display);
  const diyOrder = useSelector((state) => state.barLeft.diyOrder);

  return (
    <div
      className="item-list clearfix"
      style={{ display: zindex === diyOrder ? display : "none" }}
    >
      <div className="subitem">
        <div>
          {secondLevelCategoryVOS.map((el1, index) => (
            <dl className="fore1" diy2-order={index} key={index}>
              <dt>
                <div>
                  <div>{el1.categoryName}</div>
                </div>
              </dt>
              <dd>
                <div>
                  {el1.thirdLevelCategoryVOS.map((el2, index) => (
                    <em key={index}>
                      <a href={`nbmSearch?goodsCategoryId=${el2.categoryId}`}>
                        {el2.categoryName}
                      </a>
                    </em>
                  ))}
                </div>
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
};

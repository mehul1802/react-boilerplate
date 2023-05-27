import PropTypes from "prop-types";
import React from "react";
import classNames from "classnames";
import "./card.scss";

/**
 * Cards are a convenient means of displaying content composed of different types of objects. It is a multi usage component which creates boxes that are usually teasing some kind of content. */
const Card = ({
  children,
  className,
  image,
  isExternal,
  isLink,
  metadata,
  subTitle,
  title,
  kind,
  url,
  cardWidth,
  cardHeight,
  ...other
}) => {
  const style =
    kind == "overlay"
      ? {
          backgroundImage: `url(${image})`,
        }
      : {};

  const pagewidth = cardWidth ? cardWidth : "300px";
  const pageheight = cardHeight ? cardHeight : "260px";

  const wrapperClasses = classNames([`card__box`], {
    [`card__box--${kind}`]: kind,
    // 'wfp--photo-cardnew--no-background': !image,
    [`card__box--link`]: isLink,
    [`${className}`]: className,
  });

  const content = (
    <>
      {kind === "overlay" ? (
        <div className={`card__box__background`} style={style} />
      ) : null}

      {image && kind === "simple-card" ? (
        <img src={image} alt={title} className={`demo--header-photo`} />
      ) : null}

      <div className={`card__box__info`}>
        <div>
          {kind === "overlay" && (
            <div
              className={`card__box__info__background`}
              style={style}
            />
          )}
          {metadata && (
            <p className={`card__box__info__metadata`}>
              {metadata}
            </p>
          )}
          {title && (
            <h3 className={`card__box__info__title`}>{title}</h3>
          )}
          {subTitle && (
            <p className={`card__box__info__subtitle`}>
              {subTitle}
            </p>
          )}
        </div>
      </div>
      {children}
    </>
  );

  return isLink ? (
    <div
      className={wrapperClasses}
      style={{ width: pagewidth, minHeight: pageheight }}
    >
      <a
        href={url}
        target={isExternal ? "_blank" : ""}
        style={{ width: pagewidth, minHeight: pageheight }}
        {...other}
      >
        {content}
      </a>
    </div>
  ) : (
    <div
      className={wrapperClasses}
      {...other}
    >
      {content}
    </div>
  );
};

Card.propTypes = {
  /**
   Additional className which will be added
 */
  className: PropTypes.string,
  /**
   An optimized photograph
 */
  image: PropTypes.string,
  /**
  isExternal if true, opens link in a different window
*/
  isExternal: PropTypes.bool,
  /**
  Render the Card as link
*/
  isLink: PropTypes.bool,
  /**
  A short sentence to explain the content of the node (max 180 characters) 
*/
  subTitle: PropTypes.node,
  /**
   A search-friendly title (ideally 50 characters, max 100) 
*/
  title: PropTypes.node,
  /**
  Additional metadatas
*/
  metadata: PropTypes.string,

  /**
  Kind of Card
*/
  kind: PropTypes.oneOf(["simple-card", "overlay"]).isRequired,
  /**
  The URL where the content uploaded is located.
*/
  url: PropTypes.string,
  /**
   * override default card width with preferred width
   */
  cardWidth: PropTypes.string,

  /**
   * override default card width with preferred width
   */
  cardHeight: PropTypes.string,
};

Card.defaultProps = {
  isLink: true,
};

export default Card;

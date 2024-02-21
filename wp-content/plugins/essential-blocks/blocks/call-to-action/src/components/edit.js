/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import {
    AlignmentToolbar,
    BlockControls,
    RichText,
    useBlockProps,
} from "@wordpress/block-editor";
import { select } from "@wordpress/data";

/**
 * Internal dependencies
 */

import classnames from "classnames";

import Inspector from "./inspector";

import Style from "./style";

const {
    duplicateBlockIdFix,
    EBDisplayIcon
} = window.EBControls;

const edit = (props) => {
    const { isSelected, attributes, setAttributes, clientId, className, name } = props;
    const {
        blockMeta,
        blockId,
        resOption,
        contentStyle,
        contentAlign,
        showIcon,
        icon,
        title,
        titleTag,
        showSubtitle,
        subtitle,
        sortableLists,
        description,
        showButton,
        buttonText,
        buttonSize,
        btnHoverEffect,
        classHook,
    } = attributes;

    // this useEffect is for creating an unique id for each block's unique className by a random unique number
    useEffect(() => {
        const BLOCK_PREFIX = "eb-call-to-action";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    return (
        <>
            {isSelected && <Inspector {...props} />}
            <BlockControls>
                <AlignmentToolbar
                    value={contentAlign}
                    onChange={(contentAlign) => setAttributes({ contentAlign })}
                />
            </BlockControls>
            <div {...blockProps}>
                <Style {...props} />
                <div className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}>
                    <div className={`eb-cia-wrapper ${blockId}`}>
                        <div className="eb-cia-text-wrapper">
                            {sortableLists.map(({ label, value }, index) => {
                                if (value === "title") {
                                    return (
                                        <RichText
                                            key={index}
                                            tagName={titleTag}
                                            className="eb-cia-title"
                                            placeholder={__("Add title...", "essential-blocks")}
                                            value={title}
                                            onChange={(newTitle) => setAttributes({ title: newTitle })}
                                        />
                                    );
                                } else if (value === "subtitle") {
                                    return (
                                        showSubtitle && (
                                            <RichText
                                                key={index}
                                                tagName="h4"
                                                className="eb-cia-subtitle"
                                                placeholder={__("Add subtitle...")}
                                                value={subtitle}
                                                onChange={(newSubtitle) =>
                                                    setAttributes({ subtitle: newSubtitle })
                                                }
                                            />
                                        )
                                    );
                                } else if (value === "icon") {
                                    return (
                                        showIcon && (
                                            <EBDisplayIcon className="eb-cia-icon" icon={icon} />
                                        )
                                    );
                                } else if (value === "description") {
                                    return (
                                        <RichText
                                            key={index}
                                            tagName="p"
                                            className="eb-cia-description"
                                            placeholder={__("Add Description...", "essential-blocks")}
                                            value={description}
                                            onChange={(newText) =>
                                                setAttributes({ description: newText })
                                            }
                                        />
                                    );
                                }
                            })}
                        </div>
                        {showButton && (
                            <div className="eb-cia-button-wrapper">
                                <RichText
                                    className={`eb-cia-button is-${buttonSize}${btnHoverEffect ? ` ${btnHoverEffect}` : ""
                                        }`}
                                    placeholder={__("Add Text", "essential-blocks")}
                                    value={buttonText}
                                    onChange={(newText) => setAttributes({ buttonText: newText })}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default edit;

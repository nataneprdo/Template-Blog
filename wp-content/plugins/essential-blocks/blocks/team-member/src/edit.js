/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps, MediaUpload, RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { select } from "@wordpress/data";
/**
 * Internal dependencies
 */

const {
    duplicateBlockIdFix,
} = window.EBControls;

import classnames from "classnames";

import Inspector from "./inspector";
import SocialLinks from "./components/social-links";
import Style from "./style";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
    } = props;

    const {
        resOption,
        blockId,
        blockMeta,
        name,
        jobTitle,
        description,
        showDescs,
        imageUrl,
        imageId,
        showSocials,
        socialDetails,
        profilesOnly,
        socialInImage,
        showCSeparator,
        showSSeparator,
        icnEffect,
        classHook,
        hoverPreset,
        showDesignation,
        showSocialTitle,
        isContentOverlay,
        preset
    } = attributes;

    //
    useEffect(() => {
        const newProfiles = socialDetails.map((profile) => ({
            ...profile,
            isExpanded: false,
        }));

        setAttributes({ socialDetails: newProfiles });

        if (socialDetails.length > 0) return;

        const newSclDtails = [
            {
                title: "Facebook",
                icon: "fab fa-facebook-f",
                color: "#fff",
                bgColor: "#A0A8BD",
                link: "",
                linkOpenNewTab: false,
                isExpanded: false,
            },
            {
                title: "Twitter",
                icon: "fab fa-x-twitter",
                color: "#fff",
                bgColor: "#A0A8BD",
                link: "",
                linkOpenNewTab: false,
                isExpanded: false,
            },
            {
                title: "LinkedIn",
                icon: "fab fa-linkedin-in",
                color: "#fff",
                bgColor: "#A0A8BD",
                link: "",
                linkOpenNewTab: false,
                isExpanded: false,
            },
            {
                title: "YouTube",
                icon: "fab fa-youtube",
                color: "#fff",
                bgColor: "#A0A8BD",
                link: "",
                linkOpenNewTab: false,
                isExpanded: false,
            },
        ];

        setAttributes({ socialDetails: newSclDtails });
    }, []);

    //
    useEffect(() => {
        const profilesOnly = socialDetails.map(
            ({ title, icon, link, linkOpenNewTab }) => ({
                title,
                icon,
                link,
                linkOpenNewTab,
            })
        );

        setAttributes({ profilesOnly });
    }, [socialDetails]);



    useEffect(() => {
        // this codes is for creating a unique blockId for each block's unique className
        const BLOCK_PREFIX = "eb-team-member";
        duplicateBlockIdFix({
            BLOCK_PREFIX,
            blockId,
            setAttributes,
            select,
            clientId,
        });

        //
        if (/essential\-blocks.assets\/images\/user\.jpg/gi.test(imageUrl || " ")
        ) {
            setAttributes({
                imageUrl: `${EssentialBlocksLocalize.eb_plugins_url}assets/images/user.jpg`,
            });
        }
    }, []);

    const blockProps = useBlockProps({
        className: classnames(className, `eb-guten-block-main-parent-wrapper`),
    });

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <Style {...props} />
                <div
                    className={`eb-parent-wrapper eb-parent-${blockId} ${classHook}`}
                >
                    <div className={`${blockId} eb-team-wrapper ${preset} ${preset === 'new-preset3' ? hoverPreset : ''} ${preset === 'preset3' && isContentOverlay ? 'content-overlay' : ''}  `}>
                        <div className="eb-team-inner">
                            <div className="image">
                                <MediaUpload
                                    onSelect={({ id, url }) =>
                                        setAttributes({
                                            imageUrl: url,
                                            imageId: id,
                                        })
                                    }
                                    type="image"
                                    value={imageId}
                                    render={({ open }) => {
                                        if (!imageUrl) {
                                            return (
                                                <Button
                                                    className="eb-infobox-img-btn components-button"
                                                    label={__(
                                                        "Upload Image",
                                                        "essential-blocks"
                                                    )}
                                                    icon="format-image"
                                                    onClick={open}
                                                />
                                            );
                                        } else {
                                            return (
                                                <img
                                                    className="avatar"
                                                    alt="member"
                                                    src={imageUrl}
                                                />
                                            );
                                        }
                                    }}
                                />
                                {socialInImage && showSocials && (
                                    <SocialLinks
                                        socialDetails={profilesOnly}
                                        icnEffect={icnEffect}
                                        preset={preset}
                                    />
                                )}

                                {preset === 'new-preset1' && showDesignation && (
                                    <RichText
                                        tagName="h4"
                                        className="job_title"
                                        value={jobTitle}
                                        onChange={(jobTitle) =>
                                            setAttributes({ jobTitle })
                                        }
                                        placeholder={__(
                                            "Add job title",
                                            "team-member-block"
                                        )}
                                    />
                                )}
                            </div>
                            <div className="contents">
                                {(preset === 'new-preset1' || preset === 'new-preset2' || preset === 'new-preset3') && (
                                    <div className="contents-inner">
                                        <div className="texts">
                                            <RichText
                                                tagName="h3"
                                                className="name"
                                                value={name}
                                                onChange={(name) =>
                                                    setAttributes({ name })
                                                }
                                                placeholder={__(
                                                    "Add name here",
                                                    "team-member-block"
                                                )}
                                            />
                                            {preset != 'new-preset1' && showDesignation && (
                                                <RichText
                                                    tagName="h4"
                                                    className="job_title"
                                                    value={jobTitle}
                                                    onChange={(jobTitle) =>
                                                        setAttributes({ jobTitle })
                                                    }
                                                    placeholder={__(
                                                        "Add job title",
                                                        "team-member-block"
                                                    )}
                                                />
                                            )}

                                            {showCSeparator && (
                                                <hr className="content_separator" />
                                            )}

                                            {showDescs && (
                                                <RichText
                                                    tagName="p"
                                                    className="description"
                                                    value={description}
                                                    onChange={(description) =>
                                                        setAttributes({ description })
                                                    }
                                                    placeholder={__(
                                                        "Add description",
                                                        "team-member-block"
                                                    )}
                                                />
                                            )}
                                        </div>
                                        {!socialInImage && showSocials && (
                                            <>
                                                {showSSeparator && (
                                                    <hr className="social_separator" />
                                                )}
                                                <SocialLinks
                                                    socialDetails={profilesOnly}
                                                    icnEffect={icnEffect}
                                                    preset={preset}
                                                />
                                            </>
                                        )}
                                    </div>
                                )}

                                {(preset != 'new-preset1' && preset != 'new-preset2' && preset != 'new-preset3') && (
                                    <>
                                        <div className="texts">
                                            <RichText
                                                tagName="h3"
                                                className="name"
                                                value={name}
                                                onChange={(name) =>
                                                    setAttributes({ name })
                                                }
                                                placeholder={__(
                                                    "Add name here",
                                                    "team-member-block"
                                                )}
                                            />
                                            {preset != 'new-preset1' && showDesignation && (
                                                <RichText
                                                    tagName="h4"
                                                    className="job_title"
                                                    value={jobTitle}
                                                    onChange={(jobTitle) =>
                                                        setAttributes({ jobTitle })
                                                    }
                                                    placeholder={__(
                                                        "Add job title",
                                                        "team-member-block"
                                                    )}
                                                />
                                            )}

                                            {showCSeparator && (
                                                <hr className="content_separator" />
                                            )}

                                            {showDescs && (
                                                <RichText
                                                    tagName="p"
                                                    className="description"
                                                    value={description}
                                                    onChange={(description) =>
                                                        setAttributes({ description })
                                                    }
                                                    placeholder={__(
                                                        "Add description",
                                                        "team-member-block"
                                                    )}
                                                />
                                            )}
                                        </div>
                                        {!socialInImage && showSocials && (
                                            <>
                                                {showSSeparator && (
                                                    <hr className="social_separator" />
                                                )}
                                                <SocialLinks
                                                    socialDetails={profilesOnly}
                                                    icnEffect={icnEffect}
                                                    preset={preset}
                                                />
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

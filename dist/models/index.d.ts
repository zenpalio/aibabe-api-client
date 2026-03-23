/**
 *
 * @export
 * @interface AddonPrice
 */
export interface AddonPrice {
    /**
     *
     * @type {string}
     * @memberof AddonPrice
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof AddonPrice
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof AddonPrice
     */
    displayPrice: string;
    /**
     *
     * @type {string}
     * @memberof AddonPrice
     */
    currency: string;
    /**
     *
     * @type {number}
     * @memberof AddonPrice
     */
    tokens: number;
    /**
     *
     * @type {string}
     * @memberof AddonPrice
     */
    discount: string | null;
    /**
     *
     * @type {number}
     * @memberof AddonPrice
     */
    originalTokens?: number | null;
}
/**
 *
 * @export
 */
export declare const AnimeLora: {
    readonly Disney3d: "disney3d";
    readonly Hentai: "hentai";
    readonly Cartoon: "cartoon";
};
export type AnimeLora = typeof AnimeLora[keyof typeof AnimeLora];
/**
 *
 * @export
 */
export declare const ArtStyle: {
    readonly Artea: "artea";
    readonly Fantasy: "fantasy";
    readonly Anime3d: "anime3d";
    readonly Cartoon: "cartoon";
    readonly Truelook: "truelook";
    readonly Velvetheat: "velvetheat";
    readonly Dreammix: "dreammix";
};
export type ArtStyle = typeof ArtStyle[keyof typeof ArtStyle];
/**
 *
 * @export
 * @interface AvatarLooks
 */
export interface AvatarLooks {
    /**
     *
     * @type {BodyType}
     * @memberof AvatarLooks
     */
    bodyType: BodyType;
    /**
     *
     * @type {ButtSize}
     * @memberof AvatarLooks
     */
    buttSize: ButtSize;
    /**
     *
     * @type {BreastSize}
     * @memberof AvatarLooks
     */
    breastSize: BreastSize;
    /**
     *
     * @type {HairColor}
     * @memberof AvatarLooks
     */
    hairColor: HairColor;
    /**
     *
     * @type {HairStyle}
     * @memberof AvatarLooks
     */
    hairStyle: HairStyle;
    /**
     *
     * @type {EyeColor}
     * @memberof AvatarLooks
     */
    eyeColor: EyeColor;
}
/**
 *
 * @export
 * @interface AvatarLooksV2
 */
export interface AvatarLooksV2 {
    /**
     *
     * @type {BodyType}
     * @memberof AvatarLooksV2
     */
    bodyType: BodyType;
    /**
     *
     * @type {HairColor}
     * @memberof AvatarLooksV2
     */
    hairColor: HairColor;
}
/**
 *
 * @export
 * @interface AvatarOptionalField
 */
export interface AvatarOptionalField {
    /**
     *
     * @type {Value}
     * @memberof AvatarOptionalField
     */
    value?: Value | null;
    /**
     *
     * @type {ReviewCharacterFieldStatus}
     * @memberof AvatarOptionalField
     */
    status: ReviewCharacterFieldStatus;
    /**
     *
     * @type {boolean}
     * @memberof AvatarOptionalField
     */
    required?: boolean;
}
/**
 *
 * @export
 * @interface AvatarRequiredField
 */
export interface AvatarRequiredField {
    /**
     *
     * @type {Value}
     * @memberof AvatarRequiredField
     */
    value?: Value | null;
    /**
     *
     * @type {ReviewCharacterFieldStatus}
     * @memberof AvatarRequiredField
     */
    status: ReviewCharacterFieldStatus;
    /**
     *
     * @type {boolean}
     * @memberof AvatarRequiredField
     */
    required?: boolean;
}
/**
 *
 * @export
 */
export declare const BillingPeriod: {
    readonly Monthly: "monthly";
    readonly Quarterly: "quarterly";
    readonly Yearly: "yearly";
};
export type BillingPeriod = typeof BillingPeriod[keyof typeof BillingPeriod];
/**
 *
 * @export
 * @interface BillingReconciliationResponse
 */
export interface BillingReconciliationResponse {
    /**
     *
     * @type {Array<string>}
     * @memberof BillingReconciliationResponse
     */
    reactivated: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof BillingReconciliationResponse
     */
    deactivated: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof BillingReconciliationResponse
     */
    retry: Array<string>;
}
/**
 *
 * @export
 */
export declare const BodyType: {
    readonly Slim: "slim";
    readonly Athletic: "athletic";
    readonly Voluptuous: "voluptuous";
    readonly Curvy: "curvy";
};
export type BodyType = typeof BodyType[keyof typeof BodyType];
/**
 *
 * @export
 */
export declare const BreastSize: {
    readonly Small: "small";
    readonly Medium: "medium";
    readonly Large: "large";
    readonly Huge: "huge";
};
export type BreastSize = typeof BreastSize[keyof typeof BreastSize];
/**
 *
 * @export
 * @interface BulkDeleteContentRequest
 */
export interface BulkDeleteContentRequest {
    /**
     *
     * @type {Array<ContentItem>}
     * @memberof BulkDeleteContentRequest
     */
    items: Array<ContentItem>;
}
/**
 *
 * @export
 */
export declare const ButtSize: {
    readonly Small: "small";
    readonly Medium: "medium";
    readonly Large: "large";
    readonly Huge: "huge";
};
export type ButtSize = typeof ButtSize[keyof typeof ButtSize];
/**
 *
 * @export
 * @interface CancelSubscriptionRequest
 */
export interface CancelSubscriptionRequest {
    /**
     *
     * @type {string}
     * @memberof CancelSubscriptionRequest
     */
    reason: string;
    /**
     *
     * @type {Array<string>}
     * @memberof CancelSubscriptionRequest
     */
    comeback: Array<string>;
    /**
     *
     * @type {string}
     * @memberof CancelSubscriptionRequest
     */
    feedback: string | null;
}
/**
 *
 * @export
 * @interface CategoryValues
 */
export interface CategoryValues {
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    baseModel?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    gender?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    style?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    lora?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    age?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    ethnicity?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    bodyType?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    roleplayType?: Array<string> | null;
    /**
     *
     * @type {Array<string>}
     * @memberof CategoryValues
     */
    characterType?: Array<string> | null;
}
/**
 *
 * @export
 * @interface CharacterAboutPageReview
 */
export interface CharacterAboutPageReview {
    /**
     *
     * @type {AvatarRequiredField}
     * @memberof CharacterAboutPageReview
     */
    characterName?: AvatarRequiredField | null;
    /**
     *
     * @type {AvatarRequiredField}
     * @memberof CharacterAboutPageReview
     */
    bio?: AvatarRequiredField | null;
    /**
     *
     * @type {AvatarRequiredField}
     * @memberof CharacterAboutPageReview
     */
    greetings?: AvatarRequiredField | null;
    /**
     *
     * @type {AvatarRequiredField}
     * @memberof CharacterAboutPageReview
     */
    story?: AvatarRequiredField | null;
    /**
     *
     * @type {AvatarOptionalField}
     * @memberof CharacterAboutPageReview
     */
    exampleConversation?: AvatarOptionalField | null;
}
/**
 *
 * @export
 * @interface CharacterAvatarReview
 */
export interface CharacterAvatarReview {
    /**
     *
     * @type {AvatarRequiredField}
     * @memberof CharacterAvatarReview
     */
    description?: AvatarRequiredField | null;
}
/**
 *
 * @export
 * @interface ChatMessageDetail
 */
export interface ChatMessageDetail {
    /**
     *
     * @type {string}
     * @memberof ChatMessageDetail
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDetail
     */
    createdAt: string;
    /**
     *
     * @type {Type}
     * @memberof ChatMessageDetail
     */
    type: Type;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDetail
     */
    content: string;
    /**
     *
     * @type {ChatRole}
     * @memberof ChatMessageDetail
     */
    role: ChatRole;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDetail
     */
    requestId: string;
    /**
     *
     * @type {Status}
     * @memberof ChatMessageDetail
     */
    status: Status | null;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDetail
     */
    contentId?: string | null;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDetail
     */
    audioUrl?: string | null;
    /**
     *
     * @type {GeneratedAudioStatus}
     * @memberof ChatMessageDetail
     */
    audioStatus?: GeneratedAudioStatus | null;
    /**
     *
     * @type {string}
     * @memberof ChatMessageDetail
     */
    originalImageId?: string | null;
}
/**
 *
 * @export
 */
export declare const ChatMode: {
    readonly Chat: "chat";
    readonly Roleplaying: "roleplaying";
};
export type ChatMode = typeof ChatMode[keyof typeof ChatMode];
/**
 *
 * @export
 * @interface ChatReponse
 */
export interface ChatReponse {
    /**
     *
     * @type {string}
     * @memberof ChatReponse
     */
    content: string;
    /**
     *
     * @type {string}
     * @memberof ChatReponse
     */
    userMessageId: string;
    /**
     *
     * @type {string}
     * @memberof ChatReponse
     */
    assistantMessageId: string;
    /**
     *
     * @type {string}
     * @memberof ChatReponse
     */
    imageId: string;
}
/**
 *
 * @export
 */
export declare const ChatRole: {
    readonly User: "user";
    readonly Assistant: "assistant";
};
export type ChatRole = typeof ChatRole[keyof typeof ChatRole];
/**
 *
 * @export
 */
export declare const ChatbotCreatedOrigin: {
    readonly Custom: "custom";
    readonly Advanced: "advanced";
};
export type ChatbotCreatedOrigin = typeof ChatbotCreatedOrigin[keyof typeof ChatbotCreatedOrigin];
/**
 *
 * @export
 * @interface ChatbotInfo
 */
export interface ChatbotInfo {
    /**
     *
     * @type {string}
     * @memberof ChatbotInfo
     */
    profilePicture: string;
    /**
     *
     * @type {string}
     * @memberof ChatbotInfo
     */
    profileVideo: string;
    /**
     *
     * @type {string}
     * @memberof ChatbotInfo
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ChatbotInfo
     */
    bio: string;
    /**
     *
     * @type {number}
     * @memberof ChatbotInfo
     */
    age: number;
    /**
     *
     * @type {PublicUserPreviewWithFollow}
     * @memberof ChatbotInfo
     */
    createdBy: PublicUserPreviewWithFollow;
    /**
     *
     * @type {number}
     * @memberof ChatbotInfo
     */
    messageCount: number;
    /**
     *
     * @type {Array<TagData>}
     * @memberof ChatbotInfo
     */
    tags: Array<TagData>;
}
/**
 *
 * @export
 */
export declare const ChatbotType: {
    readonly Girls: "girls";
    readonly Anime: "anime";
    readonly Boys: "boys";
    readonly Internal: "internal";
    readonly Fantasy: "fantasy";
};
export type ChatbotType = typeof ChatbotType[keyof typeof ChatbotType];
/**
 *
 * @export
 * @interface ContentItem
 */
export interface ContentItem {
    /**
     *
     * @type {string}
     * @memberof ContentItem
     */
    contentId: string;
    /**
     *
     * @type {SharedContentType}
     * @memberof ContentItem
     */
    contentType: SharedContentType;
}
/**
 *
 * @export
 */
export declare const ContentReportReason: {
    readonly UnderageContent: "UnderageContent";
    readonly Incest: "Incest";
    readonly GoreOrRape: "GoreOrRape";
    readonly AdsOrSpam: "AdsOrSpam";
    readonly Copyright: "Copyright";
    readonly Other: "Other";
};
export type ContentReportReason = typeof ContentReportReason[keyof typeof ContentReportReason];
/**
 *
 * @export
 * @interface ConversationListItem
 */
export interface ConversationListItem {
    /**
     *
     * @type {string}
     * @memberof ConversationListItem
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof ConversationListItem
     */
    profilePicture: string;
    /**
     *
     * @type {string}
     * @memberof ConversationListItem
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof ConversationListItem
     */
    lastMessage: string;
    /**
     *
     * @type {boolean}
     * @memberof ConversationListItem
     */
    unread: boolean;
}
/**
 *
 * @export
 */
export declare const ConversationMessageFeedback: {
    readonly Positive: "positive";
    readonly Negative: "negative";
};
export type ConversationMessageFeedback = typeof ConversationMessageFeedback[keyof typeof ConversationMessageFeedback];
/**
 *
 * @export
 * @interface ConversationSettings
 */
export interface ConversationSettings {
    /**
     *
     * @type {ImageSendingMode}
     * @memberof ConversationSettings
     */
    imageSendingMode?: ImageSendingMode | null;
    /**
     *
     * @type {ChatMode}
     * @memberof ConversationSettings
     */
    chatMode?: ChatMode | null;
    /**
     *
     * @type {boolean}
     * @memberof ConversationSettings
     */
    onlySoloImages?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof ConversationSettings
     */
    sfwFilterOn?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof ConversationSettings
     */
    audioReferenceId?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof ConversationSettings
     */
    memoryTurnedOn?: boolean | null;
}
/**
 *
 * @export
 */
export declare const DateRangeFilter: {
    readonly Day: "day";
    readonly Week: "week";
    readonly Month: "month";
    readonly Year: "year";
    readonly AllTime: "all_time";
};
export type DateRangeFilter = typeof DateRangeFilter[keyof typeof DateRangeFilter];
/**
 *
 * @export
 * @interface DeleteBulkMemoryRequest
 */
export interface DeleteBulkMemoryRequest {
    /**
     *
     * @type {Array<string>}
     * @memberof DeleteBulkMemoryRequest
     */
    memoryIds: Array<string>;
}
/**
 *
 * @export
 * @interface DeleteUserRequest
 */
export interface DeleteUserRequest {
    /**
     *
     * @type {string}
     * @memberof DeleteUserRequest
     */
    password: string;
}
/**
 *
 * @export
 * @interface DetailedWallPost
 */
export interface DetailedWallPost {
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    creatorId: string;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    chatbotName: string;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    chatbotProfilePicture: string;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    chatbotProfileVideo: string | null;
    /**
     *
     * @type {boolean}
     * @memberof DetailedWallPost
     */
    chatbotPublic: boolean;
    /**
     *
     * @type {Array<ImageContent>}
     * @memberof DetailedWallPost
     */
    pictures: Array<ImageContent>;
    /**
     *
     * @type {Array<VideoContent>}
     * @memberof DetailedWallPost
     */
    videos: Array<VideoContent>;
    /**
     *
     * @type {number}
     * @memberof DetailedWallPost
     */
    likes: number;
    /**
     *
     * @type {number}
     * @memberof DetailedWallPost
     */
    messageCount: number | null;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    updatedAt: string;
    /**
     *
     * @type {boolean}
     * @memberof DetailedWallPost
     */
    liked: boolean;
    /**
     *
     * @type {SharedContentType}
     * @memberof DetailedWallPost
     */
    type: SharedContentType;
    /**
     *
     * @type {string}
     * @memberof DetailedWallPost
     */
    title: string;
    /**
     *
     * @type {Array<TagModel>}
     * @memberof DetailedWallPost
     */
    tags: Array<TagModel>;
    /**
     *
     * @type {PublicUserPreviewWithFollow}
     * @memberof DetailedWallPost
     */
    creator: PublicUserPreviewWithFollow;
}
/**
 *
 * @export
 * @interface DonationNotification
 */
export interface DonationNotification {
    /**
     *
     * @type {NotificationType}
     * @memberof DonationNotification
     */
    notificationType?: NotificationType;
    /**
     *
     * @type {boolean}
     * @memberof DonationNotification
     */
    isRead: boolean;
    /**
     *
     * @type {string}
     * @memberof DonationNotification
     */
    createdAt: string;
    /**
     *
     * @type {PublicUserPreview}
     * @memberof DonationNotification
     */
    sender?: PublicUserPreview | null;
    /**
     *
     * @type {string}
     * @memberof DonationNotification
     */
    donationId: string;
    /**
     *
     * @type {number}
     * @memberof DonationNotification
     */
    tokens: number;
    /**
     *
     * @type {string}
     * @memberof DonationNotification
     */
    message: string | null;
}
/**
 *
 * @export
 */
export declare const Ethnicity: {
    readonly Asian: "asian";
    readonly Black: "black";
    readonly Caucasian: "caucasian";
    readonly Arab: "arab";
    readonly Latina: "latina";
    readonly Indian: "indian";
    readonly Furry: "furry";
};
export type Ethnicity = typeof Ethnicity[keyof typeof Ethnicity];
/**
 *
 * @export
 */
export declare const ExceptionCode: {
    readonly InternalError: "internal_error";
    readonly AuthInvalidCredentials: "auth_invalid_credentials";
    readonly AuthInvalidPassword: "auth_invalid_password";
    readonly AuthNotVerified: "auth_not_verified";
    readonly AuthOauthOnly: "auth_oauth_only";
    readonly UserAlreadyExists: "user_already_exists";
    readonly UserNotFound: "user_not_found";
    readonly UserNotSubscribed: "user_not_subscribed";
    readonly UserIdentityRequired: "user_identity_required";
    readonly UserEmailRequired: "user_email_required";
    readonly UserEmailInvalid: "user_email_invalid";
    readonly UserSelfActionForbidden: "user_self_action_forbidden";
    readonly UserNotFoundOrInsufficientPermissions: "user_not_found_or_insufficient_permissions";
    readonly UserIdNotPresent: "user_id_not_present";
    readonly EmailAddressUsed: "email_address_used";
    readonly EmailAddressUsedRecently: "email_address_used_recently";
    readonly PublicUserNotFound: "public_user_not_found";
    readonly PublicUsernameTaken: "public_username_taken";
    readonly PublicUsernameRequired: "public_username_required";
    readonly PublicUsernameUnavailable: "public_username_unavailable";
    readonly DonorNotFound: "donor_not_found";
    readonly RecipientNotFound: "recipient_not_found";
    readonly ChatbotNotFound: "chatbot_not_found";
    readonly ChatbotBlueprintNotFound: "chatbot_blueprint_not_found";
    readonly AdvancedChatbotBuilderInProgressNotFound: "advanced_chatbot_builder_in_progress_not_found";
    readonly AdvancedChatbotBuilderInconsistentData: "advanced_chatbot_builder_inconsistent_data";
    readonly AdvancedCharacterBuilderDataMissing: "advanced_character_builder_data_missing";
    readonly CharacterProfileTagsInvalid: "character_profile_tags_invalid";
    readonly CharacterProfileAgeInvalid: "character_profile_age_invalid";
    readonly CharacterProfileGenderMissing: "character_profile_gender_missing";
    readonly CustomCharactersLimitReached: "custom_characters_limit_reached";
    readonly FreemiumLimitsReached: "freemium_limits_reached";
    readonly ChatbotNotOwnedOrNotCustom: "chatbot_not_owned_or_not_custom";
    readonly ChatbotNonOwnedForbidden: "chatbot_non_owned_forbidden";
    readonly ChatbotNameTooLong: "chatbot_name_too_long";
    readonly ProfileVideoNotFound: "profile_video_not_found";
    readonly ConversationNotFound: "conversation_not_found";
    readonly ConversationUpdateNonOwnedForbidden: "conversation_update_non_owned_forbidden";
    readonly ConversationResetNonOwnedForbidden: "conversation_reset_non_owned_forbidden";
    readonly ConversationMemoryNotFound: "conversation_memory_not_found";
    readonly MessageNotFound: "message_not_found";
    readonly PinnedMemoryNotFound: "pinned_memory_not_found";
    readonly AboutUserTooLong: "about_user_too_long";
    readonly AboutUserModerationException: "about_user_moderation_exception";
    readonly MessageModerationFlagged: "message_moderation_flagged";
    readonly PinnedMemoryCharLimitExceeded: "pinned_memory_char_limit_exceeded";
    readonly TokensInsufficient: "tokens_insufficient";
    readonly TokensInvalidAmount: "tokens_invalid_amount";
    readonly LimitsReached: "limits_reached";
    readonly ClaimInvalid: "claim_invalid";
    readonly ClaimablesNotFound: "claimables_not_found";
    readonly FormatNotSupported: "format_not_supported";
    readonly FileSizeExceeded: "file_size_exceeded";
    readonly FileUploadFailed: "file_upload_failed";
    readonly FileNotFound: "file_not_found";
    readonly InvalidPictureType: "invalid_picture_type";
    readonly ImageNotFound: "image_not_found";
    readonly ImageNotOwned: "image_not_owned";
    readonly VideoNotFound: "video_not_found";
    readonly VideoNotOwned: "video_not_owned";
    readonly VideoUploadImageFailed: "video_upload_image_failed";
    readonly VideoRetrieveFailed: "video_retrieve_failed";
    readonly VideoGenerationLimitReached: "video_generation_limit_reached";
    readonly GenerationTagsNotFound: "generation_tags_not_found";
    readonly VerificationCodeExprired: "verification_code_exprired";
    readonly VerificationCodeInvalid: "verification_code_invalid";
    readonly VerificationCodeNotSet: "verification_code_not_set";
    readonly PostNotFound: "post_not_found";
    readonly PostLocked: "post_locked";
    readonly PostDeleteNotAuthorized: "post_delete_not_authorized";
    readonly PostUpdateNotAuthorized: "post_update_not_authorized";
    readonly PostReportContentMissing: "post_report_content_missing";
    readonly ShareContentTypeUnsupported: "share_content_type_unsupported";
    readonly ShareVideoNonOwnedForbidden: "share_video_non_owned_forbidden";
    readonly ShareImageNonOwnedForbidden: "share_image_non_owned_forbidden";
    readonly ShareCharacterNonOwnedForbidden: "share_character_non_owned_forbidden";
    readonly CharacterNotFound: "character_not_found";
    readonly InvalidPlanId: "invalid_plan_id";
    readonly InvalidAddonId: "invalid_addon_id";
    readonly TransactionNotFound: "transaction_not_found";
    readonly GiftCodeNotFoundOrUsed: "gift_code_not_found_or_used";
    readonly LeaderOnlyAction: "leader_only_action";
    readonly ServerNotFound: "server_not_found";
    readonly WebsocketServerNotAvailable: "websocket_server_not_available";
    readonly LlmModelNotAvailable: "llm_model_not_available";
    readonly EmailSendFailed: "email_send_failed";
    readonly InvalidParams: "invalid_params";
    readonly ModerationFlagged: "moderation_flagged";
    readonly MarketingCampaignNotFound: "marketing_campaign_not_found";
    readonly MarketingCampaignNotAcceptable: "marketing_campaign_not_acceptable";
    readonly MarketingCampaignNoState: "marketing_campaign_no_state";
};
export type ExceptionCode = typeof ExceptionCode[keyof typeof ExceptionCode];
/**
 *
 * @export
 * @interface ExploreSearchRequest
 */
export interface ExploreSearchRequest {
    /**
     *
     * @type {SortFilter}
     * @memberof ExploreSearchRequest
     */
    sortFilter?: SortFilter;
    /**
     *
     * @type {number}
     * @memberof ExploreSearchRequest
     */
    limit?: number;
    /**
     *
     * @type {string}
     * @memberof ExploreSearchRequest
     */
    paginationToken?: string | null;
    /**
     *
     * @type {CategoryValues}
     * @memberof ExploreSearchRequest
     */
    tagFilters?: CategoryValues | null;
    /**
     *
     * @type {DateRangeFilter}
     * @memberof ExploreSearchRequest
     */
    dateFilter?: DateRangeFilter | null;
    /**
     *
     * @type {OwnerFilter}
     * @memberof ExploreSearchRequest
     */
    ownerFilter?: OwnerFilter | null;
    /**
     *
     * @type {string}
     * @memberof ExploreSearchRequest
     */
    chatbotId?: string | null;
    /**
     *
     * @type {PostType}
     * @memberof ExploreSearchRequest
     */
    postType?: PostType;
    /**
     *
     * @type {string}
     * @memberof ExploreSearchRequest
     */
    creatorUserId?: string | null;
}
/**
 *
 * @export
 * @interface ExtendVideoPayload
 */
export interface ExtendVideoPayload {
    /**
     *
     * @type {string}
     * @memberof ExtendVideoPayload
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof ExtendVideoPayload
     */
    requestId: string;
    /**
     *
     * @type {string}
     * @memberof ExtendVideoPayload
     */
    chatbotId: string;
    /**
     *
     * @type {number}
     * @memberof ExtendVideoPayload
     */
    duration: number;
    /**
     *
     * @type {string}
     * @memberof ExtendVideoPayload
     */
    prompt: string;
    /**
     *
     * @type {Array<VideoLoraName>}
     * @memberof ExtendVideoPayload
     */
    loras: Array<VideoLoraName>;
}
/**
 *
 * @export
 */
export declare const EyeColor: {
    readonly Blue: "blue";
    readonly Brown: "brown";
    readonly Green: "green";
};
export type EyeColor = typeof EyeColor[keyof typeof EyeColor];
/**
 *
 * @export
 */
export declare const FantasyRace: {
    readonly Alien: "alien";
    readonly Android: "android";
    readonly Barbarian: "barbarian";
    readonly Cyborg: "cyborg";
    readonly DarkElf: "dark_elf";
    readonly DragonQueen: "dragon_queen";
    readonly Dryad: "dryad";
    readonly ForestNymph: "forest_nymph";
    readonly Elf: "elf";
    readonly ElfPriestess: "elf_priestess";
    readonly Fairy: "fairy";
    readonly Ghost: "ghost";
    readonly Goddess: "goddess";
    readonly Human: "human";
    readonly Mage: "mage";
    readonly Mermaid: "mermaid";
    readonly Orc: "orc";
    readonly Succubus: "succubus";
    readonly Superhero: "superhero";
    readonly Tentacle: "tentacle";
    readonly Valkyrie: "valkyrie";
    readonly Witch: "witch";
};
export type FantasyRace = typeof FantasyRace[keyof typeof FantasyRace];
/**
 *
 * @export
 */
export declare const FeatureFlagName: {
    readonly GrokModeration: "GROK_MODERATION";
    readonly MarketingBanners: "MARKETING_BANNERS";
};
export type FeatureFlagName = typeof FeatureFlagName[keyof typeof FeatureFlagName];
/**
 *
 * @export
 * @interface FollowNotification
 */
export interface FollowNotification {
    /**
     *
     * @type {NotificationType}
     * @memberof FollowNotification
     */
    notificationType?: NotificationType;
    /**
     *
     * @type {boolean}
     * @memberof FollowNotification
     */
    isRead: boolean;
    /**
     *
     * @type {string}
     * @memberof FollowNotification
     */
    createdAt: string;
    /**
     *
     * @type {PublicUserPreview}
     * @memberof FollowNotification
     */
    sender?: PublicUserPreview | null;
}
/**
 *
 * @export
 */
export declare const FurryVisualType: {
    readonly Catgirl: "catgirl";
    readonly Wolfgirl: "wolfgirl";
    readonly Foxgirl: "foxgirl";
    readonly Bunnygirl: "bunnygirl";
    readonly Cowgirl: "cowgirl";
    readonly Sharkgirl: "sharkgirl";
    readonly Tigergirl: "tigergirl";
    readonly Dragoness: "dragoness";
};
export type FurryVisualType = typeof FurryVisualType[keyof typeof FurryVisualType];
/**
 *
 * @export
 * @interface GalleryItem
 */
export interface GalleryItem {
    /**
     *
     * @type {string}
     * @memberof GalleryItem
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GalleryItem
     */
    displayName: string;
    /**
     *
     * @type {boolean}
     * @memberof GalleryItem
     */
    unlocked: boolean;
    /**
     *
     * @type {number}
     * @memberof GalleryItem
     */
    price: number;
    /**
     *
     * @type {Array<string>}
     * @memberof GalleryItem
     */
    pictures: Array<string>;
    /**
     *
     * @type {number}
     * @memberof GalleryItem
     */
    imageCount: number;
}
/**
 *
 * @export
 */
export declare const GeneratedAudioStatus: {
    readonly Started: "started";
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Finished: "finished";
    readonly Failed: "failed";
    readonly MaxConcurencyReached: "max_concurency_reached";
    readonly ModerationException: "moderation_exception";
    readonly NotEnoughTokens: "not_enough_tokens";
    readonly DailyFreeLimitReached: "daily_free_limit_reached";
};
export type GeneratedAudioStatus = typeof GeneratedAudioStatus[keyof typeof GeneratedAudioStatus];
/**
 *
 * @export
 * @interface GeneratedImages
 */
export interface GeneratedImages {
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    type: GeneratedImagesTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    chatbotName: string;
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    chatbotAvatar: string;
    /**
     *
     * @type {Array<string>}
     * @memberof GeneratedImages
     */
    urls: Array<string>;
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    createdAt: string;
    /**
     *
     * @type {PostDetails}
     * @memberof GeneratedImages
     */
    postDetails?: PostDetails | null;
    /**
     *
     * @type {Array<string>}
     * @memberof GeneratedImages
     */
    imageIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    eta: string;
    /**
     *
     * @type {ImageGenerationStatus}
     * @memberof GeneratedImages
     */
    status: ImageGenerationStatus;
    /**
     *
     * @type {string}
     * @memberof GeneratedImages
     */
    generationId: string;
    /**
     *
     * @type {boolean}
     * @memberof GeneratedImages
     */
    seenByUser: boolean;
}
/**
 * @export
 */
export declare const GeneratedImagesTypeEnum: {
    readonly GeneratedImages: "generatedImages";
    readonly GeneratedVideos: "generatedVideos";
};
export type GeneratedImagesTypeEnum = typeof GeneratedImagesTypeEnum[keyof typeof GeneratedImagesTypeEnum];
/**
 *
 * @export
 * @interface GeneratedVideos
 */
export interface GeneratedVideos {
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    type: GeneratedVideosTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    chatbotName: string;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    chatbotAvatar: string;
    /**
     *
     * @type {Array<string>}
     * @memberof GeneratedVideos
     */
    urls: Array<string>;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    createdAt: string;
    /**
     *
     * @type {PostDetails}
     * @memberof GeneratedVideos
     */
    postDetails?: PostDetails | null;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    eta: string;
    /**
     *
     * @type {VideoGenerationStatus}
     * @memberof GeneratedVideos
     */
    status: VideoGenerationStatus;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    generationId: string;
    /**
     *
     * @type {boolean}
     * @memberof GeneratedVideos
     */
    seenByUser: boolean;
    /**
     *
     * @type {string}
     * @memberof GeneratedVideos
     */
    originalImageId: string;
}
/**
 * @export
 */
export declare const GeneratedVideosTypeEnum: {
    readonly GeneratedImages: "generatedImages";
    readonly GeneratedVideos: "generatedVideos";
};
export type GeneratedVideosTypeEnum = typeof GeneratedVideosTypeEnum[keyof typeof GeneratedVideosTypeEnum];
/**
 *
 * @export
 * @interface GetAboutChatbotResponse
 */
export interface GetAboutChatbotResponse {
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    name: string | null;
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    story: string | null;
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    bio: string | null;
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    exampleConversation: string | null;
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    looksDescription: string | null;
    /**
     *
     * @type {ModelName}
     * @memberof GetAboutChatbotResponse
     */
    model: ModelName | null;
    /**
     *
     * @type {Array<LoraName>}
     * @memberof GetAboutChatbotResponse
     */
    loras: Array<LoraName> | null;
    /**
     *
     * @type {boolean}
     * @memberof GetAboutChatbotResponse
     */
    generationStated: boolean | null;
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    profilePicture: string | null;
    /**
     *
     * @type {string}
     * @memberof GetAboutChatbotResponse
     */
    greetings: string | null;
}
/**
 *
 * @export
 * @interface GetChatbotListResponse
 */
export interface GetChatbotListResponse {
    /**
     *
     * @type {Array<ListChatbotItem>}
     * @memberof GetChatbotListResponse
     */
    characters?: Array<ListChatbotItem>;
    /**
     *
     * @type {string}
     * @memberof GetChatbotListResponse
     */
    paginationToken?: string | null;
}
/**
 *
 * @export
 * @interface GetChatbotResponse
 */
export interface GetChatbotResponse {
    /**
     *
     * @type {string}
     * @memberof GetChatbotResponse
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof GetChatbotResponse
     */
    profilePicture: string;
    /**
     *
     * @type {string}
     * @memberof GetChatbotResponse
     */
    profileVideo: string;
    /**
     *
     * @type {string}
     * @memberof GetChatbotResponse
     */
    fullBio: string;
    /**
     *
     * @type {number}
     * @memberof GetChatbotResponse
     */
    characterAge: number;
    /**
     *
     * @type {Array<WallPost>}
     * @memberof GetChatbotResponse
     */
    posts: Array<WallPost>;
    /**
     *
     * @type {Array<GalleryItem>}
     * @memberof GetChatbotResponse
     */
    galleries: Array<GalleryItem>;
    /**
     *
     * @type {number}
     * @memberof GetChatbotResponse
     */
    unlockAllPrice: number;
}
/**
 *
 * @export
 * @interface GetClaimablesResponse
 */
export interface GetClaimablesResponse {
    /**
     *
     * @type {boolean}
     * @memberof GetClaimablesResponse
     */
    joinedDiscord: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetClaimablesResponse
     */
    joinedReddit: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetClaimablesResponse
     */
    joinedInstagram: boolean;
    /**
     *
     * @type {boolean}
     * @memberof GetClaimablesResponse
     */
    claimedDailyLogin: boolean;
}
/**
 *
 * @export
 * @interface GetConversationMessagesResponse
 */
export interface GetConversationMessagesResponse {
    /**
     *
     * @type {Array<ChatMessageDetail>}
     * @memberof GetConversationMessagesResponse
     */
    messages: Array<ChatMessageDetail>;
    /**
     *
     * @type {string}
     * @memberof GetConversationMessagesResponse
     */
    paginationToken?: string | null;
}
/**
 *
 * @export
 * @interface GetConversationResponse
 */
export interface GetConversationResponse {
    /**
     *
     * @type {ChatbotInfo}
     * @memberof GetConversationResponse
     */
    chatbotInfo: ChatbotInfo;
    /**
     *
     * @type {Array<ChatMessageDetail>}
     * @memberof GetConversationResponse
     */
    messages: Array<ChatMessageDetail>;
    /**
     *
     * @type {boolean}
     * @memberof GetConversationResponse
     */
    isPublic: boolean;
    /**
     *
     * @type {ConversationSettings}
     * @memberof GetConversationResponse
     */
    settings: ConversationSettings;
    /**
     *
     * @type {string}
     * @memberof GetConversationResponse
     */
    conversationId: string;
    /**
     *
     * @type {PostDetails}
     * @memberof GetConversationResponse
     */
    postDetails: PostDetails | null;
    /**
     *
     * @type {string}
     * @memberof GetConversationResponse
     */
    paginationToken?: string | null;
}
/**
 *
 * @export
 * @interface GetCustomChatbotResponse
 */
export interface GetCustomChatbotResponse {
    /**
     *
     * @type {string}
     * @memberof GetCustomChatbotResponse
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof GetCustomChatbotResponse
     */
    profilePicture: string;
    /**
     *
     * @type {string}
     * @memberof GetCustomChatbotResponse
     */
    profileVideo: string;
    /**
     *
     * @type {string}
     * @memberof GetCustomChatbotResponse
     */
    fullBio: string;
    /**
     *
     * @type {number}
     * @memberof GetCustomChatbotResponse
     */
    characterAge: number;
    /**
     *
     * @type {Array<TagData>}
     * @memberof GetCustomChatbotResponse
     */
    tags: Array<TagData>;
    /**
     *
     * @type {number}
     * @memberof GetCustomChatbotResponse
     */
    chatCount: number;
    /**
     *
     * @type {ChatbotCreatedOrigin}
     * @memberof GetCustomChatbotResponse
     */
    createdFrom: ChatbotCreatedOrigin;
    /**
     *
     * @type {PublicUserPreviewWithFollow}
     * @memberof GetCustomChatbotResponse
     */
    creator: PublicUserPreviewWithFollow;
    /**
     *
     * @type {PostDetailsWithDate}
     * @memberof GetCustomChatbotResponse
     */
    postDetails?: PostDetailsWithDate | null;
}
/**
 *
 * @export
 * @interface GetDetailedPostsResponse
 */
export interface GetDetailedPostsResponse {
    /**
     *
     * @type {Array<DetailedWallPost>}
     * @memberof GetDetailedPostsResponse
     */
    posts: Array<DetailedWallPost>;
    /**
     *
     * @type {string}
     * @memberof GetDetailedPostsResponse
     */
    paginationToken?: string | null;
}
/**
 *
 * @export
 * @interface GetExceptionsResponse
 */
export interface GetExceptionsResponse {
    /**
     *
     * @type {Array<ExceptionCode>}
     * @memberof GetExceptionsResponse
     */
    exceptions: Array<ExceptionCode>;
}
/**
 *
 * @export
 * @interface GetFollowedUsersResponse
 */
export interface GetFollowedUsersResponse {
    /**
     *
     * @type {Array<PublicUserPreview>}
     * @memberof GetFollowedUsersResponse
     */
    users: Array<PublicUserPreview>;
}
/**
 *
 * @export
 * @interface GetGalleryResponse
 */
export interface GetGalleryResponse {
    /**
     *
     * @type {Array<GetGalleryResponseItemsInner>}
     * @memberof GetGalleryResponse
     */
    items: Array<GetGalleryResponseItemsInner>;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponse
     */
    paginationToken?: string | null;
}
/**
 *
 * @export
 * @interface GetGalleryResponseItemsInner
 */
export interface GetGalleryResponseItemsInner {
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    type: GetGalleryResponseItemsInnerTypeEnum;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    chatbotName: string;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    chatbotAvatar: string;
    /**
     *
     * @type {Array<string>}
     * @memberof GetGalleryResponseItemsInner
     */
    urls: Array<string>;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    createdAt: string;
    /**
     *
     * @type {PostDetails}
     * @memberof GetGalleryResponseItemsInner
     */
    postDetails?: PostDetails;
    /**
     *
     * @type {Array<string>}
     * @memberof GetGalleryResponseItemsInner
     */
    imageIds: Array<string>;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    eta: string;
    /**
     *
     * @type {VideoGenerationStatus}
     * @memberof GetGalleryResponseItemsInner
     */
    status: VideoGenerationStatus;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    generationId: string;
    /**
     *
     * @type {boolean}
     * @memberof GetGalleryResponseItemsInner
     */
    seenByUser: boolean;
    /**
     *
     * @type {string}
     * @memberof GetGalleryResponseItemsInner
     */
    originalImageId: string;
}
/**
 * @export
 */
export declare const GetGalleryResponseItemsInnerTypeEnum: {
    readonly GeneratedImages: "generatedImages";
    readonly GeneratedVideos: "generatedVideos";
};
export type GetGalleryResponseItemsInnerTypeEnum = typeof GetGalleryResponseItemsInnerTypeEnum[keyof typeof GetGalleryResponseItemsInnerTypeEnum];
/**
 *
 * @export
 * @interface GetGeneratedImage
 */
export interface GetGeneratedImage {
    /**
     *
     * @type {string}
     * @memberof GetGeneratedImage
     */
    imageUrl: string;
    /**
     *
     * @type {string}
     * @memberof GetGeneratedImage
     */
    imageId: string;
}
/**
 *
 * @export
 * @interface GetImageGenerationTagsResponse
 */
export interface GetImageGenerationTagsResponse {
    /**
     *
     * @type {string}
     * @memberof GetImageGenerationTagsResponse
     */
    tags: string;
    /**
     *
     * @type {string}
     * @memberof GetImageGenerationTagsResponse
     */
    downloadUrl: string;
    /**
     *
     * @type {string}
     * @memberof GetImageGenerationTagsResponse
     */
    chatbotName: string;
    /**
     *
     * @type {Array<LoraName>}
     * @memberof GetImageGenerationTagsResponse
     */
    loras: Array<LoraName>;
}
/**
 *
 * @export
 * @interface GetMemoryResponse
 */
export interface GetMemoryResponse {
    /**
     *
     * @type {Array<MemoryChat>}
     * @memberof GetMemoryResponse
     */
    memories: Array<MemoryChat>;
    /**
     *
     * @type {number}
     * @memberof GetMemoryResponse
     */
    savedCharCount: number;
    /**
     *
     * @type {number}
     * @memberof GetMemoryResponse
     */
    savedAboutUserCharCount: number;
    /**
     *
     * @type {string}
     * @memberof GetMemoryResponse
     */
    aboutUser: string;
}
/**
 *
 * @export
 * @interface GetPostsResponse
 */
export interface GetPostsResponse {
    /**
     *
     * @type {Array<WallPost>}
     * @memberof GetPostsResponse
     */
    posts: Array<WallPost>;
    /**
     *
     * @type {string}
     * @memberof GetPostsResponse
     */
    paginationToken?: string | null;
}
/**
 *
 * @export
 * @interface GetPricesResponse
 */
export interface GetPricesResponse {
    /**
     *
     * @type {{ [key: string]: Array<SubscriptionPrice>; }}
     * @memberof GetPricesResponse
     */
    subscriptions: {
        [key: string]: Array<SubscriptionPrice>;
    };
    /**
     *
     * @type {{ [key: string]: Array<AddonPrice>; }}
     * @memberof GetPricesResponse
     */
    addons: {
        [key: string]: Array<AddonPrice>;
    };
}
/**
 *
 * @export
 * @interface GetPublicLatestUpdateResponse
 */
export interface GetPublicLatestUpdateResponse {
    /**
     *
     * @type {boolean}
     * @memberof GetPublicLatestUpdateResponse
     */
    available: boolean;
    /**
     *
     * @type {number}
     * @memberof GetPublicLatestUpdateResponse
     */
    remainingDays?: number | null;
}
/**
 *
 * @export
 * @interface GetQualityControlImage
 */
export interface GetQualityControlImage {
    /**
     *
     * @type {string}
     * @memberof GetQualityControlImage
     */
    imageUrl: string;
    /**
     *
     * @type {string}
     * @memberof GetQualityControlImage
     */
    imageId: string;
    /**
     *
     * @type {string}
     * @memberof GetQualityControlImage
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof GetQualityControlImage
     */
    prompt: string;
    /**
     *
     * @type {string}
     * @memberof GetQualityControlImage
     */
    generationTags: string | null;
    /**
     *
     * @type {ImageGenerationSource}
     * @memberof GetQualityControlImage
     */
    generationSource: ImageGenerationSource | null;
}
/**
 *
 * @export
 * @interface GetQualityControlRequest
 */
export interface GetQualityControlRequest {
    /**
     *
     * @type {ModelName}
     * @memberof GetQualityControlRequest
     */
    baseModel?: ModelName | null;
    /**
     *
     * @type {Array<LoraName>}
     * @memberof GetQualityControlRequest
     */
    loras?: Array<LoraName> | null;
    /**
     *
     * @type {ImageGenerationSource}
     * @memberof GetQualityControlRequest
     */
    generationSource?: ImageGenerationSource | null;
    /**
     *
     * @type {number}
     * @memberof GetQualityControlRequest
     */
    pageSize?: number;
    /**
     *
     * @type {string}
     * @memberof GetQualityControlRequest
     */
    generatedAfter?: string | null;
    /**
     *
     * @type {string}
     * @memberof GetQualityControlRequest
     */
    chatbotId?: string | null;
    /**
     *
     * @type {string}
     * @memberof GetQualityControlRequest
     */
    userId?: string | null;
}
/**
 *
 * @export
 * @interface GetVideoGenerationTagsResponse
 */
export interface GetVideoGenerationTagsResponse {
    /**
     *
     * @type {string}
     * @memberof GetVideoGenerationTagsResponse
     */
    tags: string;
    /**
     *
     * @type {string}
     * @memberof GetVideoGenerationTagsResponse
     */
    downloadUrl: string;
    /**
     *
     * @type {string}
     * @memberof GetVideoGenerationTagsResponse
     */
    chatbotName: string;
    /**
     *
     * @type {string}
     * @memberof GetVideoGenerationTagsResponse
     */
    originalImageId: string;
    /**
     *
     * @type {Array<VideoLoraName>}
     * @memberof GetVideoGenerationTagsResponse
     */
    loras: Array<VideoLoraName>;
}
/**
 *
 * @export
 */
export declare const GiftCodeType: {
    readonly _100: "tokens_100";
    readonly _200: "tokens_200";
    readonly _500: "tokens_500";
    readonly _1200: "tokens_1200";
};
export type GiftCodeType = typeof GiftCodeType[keyof typeof GiftCodeType];
/**
 *
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     *
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}
/**
 *
 * @export
 */
export declare const HairColor: {
    readonly Blonde: "blonde";
    readonly Brunette: "brunette";
    readonly Black: "black";
    readonly Pink: "pink";
    readonly DarkBrownHair: "Dark Brown Hair";
    readonly Blue: "blue";
    readonly Chestnut: "chestnut";
    readonly Ginger: "ginger";
    readonly DarkRed: "dark red";
    readonly LightBlue: "light blue";
    readonly DarkBlue: "dark blue";
    readonly DarkPurple: "dark purple";
    readonly Green: "green";
    readonly Grey: "grey";
    readonly White: "white";
    readonly TealWithPurpleHighlightHair: "teal with purple highlight hair";
    readonly RainbowColors: "rainbow colors";
    readonly BlondeHairWithPinkBalayage: "blonde hair with pink balayage";
    readonly PurpleHairWithPinkBalayage: "purple hair with pink balayage";
    readonly BlondeHairWithPinkOmbre: "blonde hair with pink ombre";
    readonly PlatiniumBlonde: "platinium blonde";
    readonly Random: "random";
};
export type HairColor = typeof HairColor[keyof typeof HairColor];
/**
 *
 * @export
 */
export declare const HairStyle: {
    readonly Short: "short";
    readonly Braids: "braids";
    readonly Curly: "curly";
    readonly Straight: "straight";
    readonly Bun: "bun";
    readonly Ponytail: "ponytail";
    readonly ShoulderLengthStraight: "shoulder length straight";
    readonly VeryLongWave: "very long wave";
    readonly LooseWave: "loose wave";
    readonly CurlyFrizzy: "curly frizzy";
    readonly CurlyShort: "curly short";
    readonly Ringlets: "ringlets";
    readonly StackedCurlsInShortBlob: "stacked curls in Short Blob";
    readonly BlobHaircut: "Blob haircut";
    readonly BluntBlobHaircut: "Blunt Blob haircut";
    readonly BowlCut: "Bowl cut";
    readonly ShoulderLengthWithBangs: "shoulder length with bangs";
    readonly LongHairWithBangs: "long hair with bangs";
    readonly Updo: "updo";
    readonly Chignon: "chignon";
    readonly DoubleBun: "double bun";
    readonly Twintails: "twintails";
    readonly SideBraid: "side braid";
    readonly FishtailBraid: "fishtail braid";
    readonly BoxBraids: "box braids";
    readonly ShortCurlyPixieCut: "short curly pixie cut";
    readonly PixieCut: "pixie cut";
    readonly TomboyCut: "tomboy cut";
    readonly HighPonytail: "high ponytail";
    readonly LongPonytail: "long ponytail";
    readonly Cornrows: "cornrows";
    readonly Dreadlocks: "dreadlocks";
    readonly LooseCurlyAfro: "loose curly afro";
    readonly Afro: "afro";
    readonly Cloudy: "cloudy";
    readonly Crimped: "crimped";
    readonly BuzzCut: "buzz cut";
    readonly Bald: "bald";
    readonly BleachedSpikes: "bleached spikes";
    readonly Spiky: "spiky";
    readonly Mohawk: "mohawk";
    readonly FrenchTwist: "french twist";
    readonly Beehive: "beehive";
    readonly Pompadour: "pompadour";
    readonly QuiffHaircut: "quiff haircut";
    readonly CrazyFuturistic: "crazy futuristic";
    readonly CrazyPunk: "crazy punk";
    readonly CrazyVintage: "crazy vintage";
    readonly PinterestMultiple: "pinterest multiple";
    readonly MegaTwinDrillstwintails: "mega twin drills,twintails";
    readonly MegaPonytail: "mega ponytail";
    readonly Big: "big";
};
export type HairStyle = typeof HairStyle[keyof typeof HairStyle];
/**
 *
 * @export
 */
export declare const Hobby: {
    readonly Reading: "reading";
    readonly Writing: "writing";
    readonly Youtube: "youtube";
    readonly TvSeries: "tv_series";
    readonly Anime: "anime";
    readonly Cosplay: "cosplay";
    readonly Hiking: "hiking";
    readonly Manga: "manga";
    readonly Streaming: "streaming";
    readonly Yoga: "yoga";
    readonly TikTok: "tik_tok";
    readonly Photography: "photography";
    readonly Traveling: "traveling";
    readonly Dancing: "dancing";
    readonly VideoGames: "video_games";
    readonly Memes: "memes";
    readonly Podcasts: "podcasts";
    readonly DigitalArt: "digital_art";
    readonly Movies: "movies";
    readonly Fitness: "fitness";
    readonly Cooking: "cooking";
    readonly Fishing: "fishing";
    readonly Camping: "camping";
    readonly Chess: "chess";
    readonly BoardGames: "board_games";
    readonly Vlogging: "vlogging";
    readonly Sports: "sports";
    readonly Puzzles: "puzzles";
};
export type Hobby = typeof Hobby[keyof typeof Hobby];
/**
 *
 * @export
 * @interface ImageContent
 */
export interface ImageContent {
    /**
     *
     * @type {string}
     * @memberof ImageContent
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ImageContent
     */
    url: string;
}
/**
 *
 * @export
 */
export declare const ImageGenerationQuality: {
    readonly Low: "low";
    readonly High: "high";
};
export type ImageGenerationQuality = typeof ImageGenerationQuality[keyof typeof ImageGenerationQuality];
/**
 *
 * @export
 */
export declare const ImageGenerationSource: {
    readonly Chat: "chat";
    readonly Generator: "generator";
};
export type ImageGenerationSource = typeof ImageGenerationSource[keyof typeof ImageGenerationSource];
/**
 *
 * @export
 */
export declare const ImageGenerationStatus: {
    readonly Started: "started";
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Finished: "finished";
    readonly Failed: "failed";
    readonly MaxConcurencyReached: "max_concurency_reached";
    readonly ModerationException: "moderation_exception";
    readonly NotEnoughTokens: "not_enough_tokens";
    readonly DailyFreeLimitReached: "daily_free_limit_reached";
};
export type ImageGenerationStatus = typeof ImageGenerationStatus[keyof typeof ImageGenerationStatus];
/**
 *
 * @export
 * @interface ImageParameters
 */
export interface ImageParameters {
    /**
     *
     * @type {number}
     * @memberof ImageParameters
     */
    seed: number | null;
    /**
     *
     * @type {string}
     * @memberof ImageParameters
     */
    modelName: string | null;
    /**
     *
     * @type {string}
     * @memberof ImageParameters
     */
    negativePrompt: string | null;
    /**
     *
     * @type {string}
     * @memberof ImageParameters
     */
    positivePrompt: string | null;
}
/**
 *
 * @export
 */
export declare const ImageSendingMode: {
    readonly Dynamic: "dynamic";
    readonly Request: "request";
    readonly Off: "off";
};
export type ImageSendingMode = typeof ImageSendingMode[keyof typeof ImageSendingMode];
/**
 *
 * @export
 * @interface ImageToVideoFromChatPayload
 */
export interface ImageToVideoFromChatPayload {
    /**
     *
     * @type {string}
     * @memberof ImageToVideoFromChatPayload
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoFromChatPayload
     */
    inputImageId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoFromChatPayload
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoFromChatPayload
     */
    requestId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoFromChatPayload
     */
    generationId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoFromChatPayload
     */
    conversationId: string;
}
/**
 *
 * @export
 * @interface ImageToVideoPayload
 */
export interface ImageToVideoPayload {
    /**
     *
     * @type {string}
     * @memberof ImageToVideoPayload
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoPayload
     */
    inputImageId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoPayload
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoPayload
     */
    requestId: string;
    /**
     *
     * @type {number}
     * @memberof ImageToVideoPayload
     */
    duration: number;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoPayload
     */
    prompt: string;
    /**
     *
     * @type {Array<VideoLoraName>}
     * @memberof ImageToVideoPayload
     */
    loras: Array<VideoLoraName>;
}
/**
 *
 * @export
 * @interface ImageToVideoRecommendationPayload
 */
export interface ImageToVideoRecommendationPayload {
    /**
     *
     * @type {string}
     * @memberof ImageToVideoRecommendationPayload
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoRecommendationPayload
     */
    inputImageId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoRecommendationPayload
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoRecommendationPayload
     */
    requestId: string;
    /**
     *
     * @type {string}
     * @memberof ImageToVideoRecommendationPayload
     */
    prompt: string;
}
/**
 *
 * @export
 * @interface InstanceDetails
 */
export interface InstanceDetails {
    /**
     *
     * @type {string}
     * @memberof InstanceDetails
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof InstanceDetails
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof InstanceDetails
     */
    aidockUrl?: string;
    /**
     *
     * @type {string}
     * @memberof InstanceDetails
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof InstanceDetails
     */
    password?: string;
}
/**
 *
 * @export
 */
export declare const InstanceProvider: {
    readonly Runpod: "runpod";
    readonly Vastai: "vastai";
};
export type InstanceProvider = typeof InstanceProvider[keyof typeof InstanceProvider];
/**
 *
 * @export
 */
export declare const InstanceType: {
    readonly Automatic1111: "automatic1111";
    readonly Tgi: "tgi";
    readonly Video: "video";
    readonly Audio: "audio";
};
export type InstanceType = typeof InstanceType[keyof typeof InstanceType];
/**
 *
 * @export
 */
export declare const LLM: {
    readonly Gemma: "gemma";
    readonly Llama: "llama";
    readonly Lemonade: "lemonade";
    readonly Qwen3: "qwen3";
    readonly LemonadePremium: "lemonade_premium";
    readonly GemmaPremium: "gemma_premium";
};
export type LLM = typeof LLM[keyof typeof LLM];
/**
 *
 * @export
 */
export declare const Language: {
    readonly En: "en";
    readonly De: "de";
    readonly Fr: "fr";
    readonly Es: "es";
    readonly It: "it";
    readonly Cs: "cs";
    readonly Pl: "pl";
};
export type Language = typeof Language[keyof typeof Language];
/**
 *
 * @export
 * @interface LikePostNotification
 */
export interface LikePostNotification {
    /**
     *
     * @type {NotificationType}
     * @memberof LikePostNotification
     */
    notificationType?: NotificationType;
    /**
     *
     * @type {boolean}
     * @memberof LikePostNotification
     */
    isRead: boolean;
    /**
     *
     * @type {string}
     * @memberof LikePostNotification
     */
    createdAt: string;
    /**
     *
     * @type {PublicUserPreview}
     * @memberof LikePostNotification
     */
    sender?: PublicUserPreview | null;
    /**
     *
     * @type {WallPost}
     * @memberof LikePostNotification
     */
    post: WallPost;
    /**
     *
     * @type {number}
     * @memberof LikePostNotification
     */
    totalCount: number;
    /**
     *
     * @type {string}
     * @memberof LikePostNotification
     */
    chatbotName: string;
    /**
     *
     * @type {PostType}
     * @memberof LikePostNotification
     */
    type: PostType;
}
/**
 *
 * @export
 * @interface ListChatbotItem
 */
export interface ListChatbotItem {
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    profilePicture: string;
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    updatedAt: string;
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    profileVideo: string;
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    bio: string;
    /**
     *
     * @type {number}
     * @memberof ListChatbotItem
     */
    messageCount: number;
    /**
     *
     * @type {string}
     * @memberof ListChatbotItem
     */
    lastMessageAt?: string | null;
    /**
     *
     * @type {PostDetails}
     * @memberof ListChatbotItem
     */
    postDetails?: PostDetails | null;
}
/**
 *
 * @export
 * @interface ListConversationsResponse
 */
export interface ListConversationsResponse {
    /**
     *
     * @type {string}
     * @memberof ListConversationsResponse
     */
    paginationToken?: string | null;
    /**
     *
     * @type {Array<ConversationListItem>}
     * @memberof ListConversationsResponse
     */
    conversations: Array<ConversationListItem>;
}
/**
 *
 * @export
 */
export declare const LoraName: {
    readonly Aesthetic: "aesthetic";
    readonly Aheago: "aheago";
    readonly Anal: "anal";
    readonly AnalAllPoses: "anal_all_poses";
    readonly AnalBeads: "anal_beads";
    readonly Analogue: "analogue";
    readonly Bimbo: "bimbo";
    readonly Blowjob: "blowjob";
    readonly Bukkake: "bukkake";
    readonly Buttplug: "buttplug";
    readonly Choking: "choking";
    readonly CowgirlPov: "cowgirl_pov";
    readonly Creampie: "creampie";
    readonly Cyberpunk: "cyberpunk";
    readonly DeepthroathNoseSnot: "deepthroath_nose_snot";
    readonly DeepthroathSideways: "deepthroath_sideways";
    readonly DeepthroathSloppy: "deepthroath_sloppy";
    readonly DetailTweaker: "detail_tweaker";
    readonly DetailedPainting: "detailed_painting";
    readonly _3DanimationDisney10: "3Danimation_Disney_1.0";
    readonly DoggyStyleAnal: "doggy_style_anal";
    readonly DoggyStyleVaginal: "doggy_style_vaginal";
    readonly DoublePenentration: "double_penentration";
    readonly DramaticLighting: "dramatic_lighting";
    readonly DramaticLightingPony: "dramatic_lighting_pony";
    readonly Ebony: "ebony";
    readonly EyesForPony: "eyes_for_pony";
    readonly ExpressiveH: "Expressive_H";
    readonly FacesitAnime: "facesit_anime";
    readonly Facesitting: "facesitting";
    readonly Facials: "facials";
    readonly Feet: "feet";
    readonly FemaleEjaculation: "female_ejaculation";
    readonly FingerInAss: "finger_in_ass";
    readonly Fingering: "fingering";
    readonly Fisting: "fisting";
    readonly FistingAnal: "fisting_anal";
    readonly Footjob: "footjob";
    readonly FootjobPony: "footjob_pony";
    readonly FullNelson: "full_nelson";
    readonly FutanariErect: "futanari_erect";
    readonly FutanariFlaccid: "futanari_flaccid";
    readonly FutanariRealistic: "futanari_realistic";
    readonly G0th1cPxl: "g0th1cPXL";
    readonly GhoticGirl: "ghotic_girl";
    readonly HairyArmpit: "hairy_armpit";
    readonly HairyPussy: "hairy_pussy";
    readonly HiddenSpycam: "hidden_spycam";
    readonly HiddenSpycamPony: "hidden_spycam_pony";
    readonly IncaseStyle: "incase_style";
    readonly Indian: "indian";
    readonly Kawaii: "kawaii";
    readonly LeakedNudes: "leaked_nudes";
    readonly LegsBehindHead: "legs_behind_head";
    readonly LegsBehindHeadPony: "legs_behind_head_pony";
    readonly MirrorSelfie: "mirror_selfie";
    readonly MissionaryAnalPov: "missionary_anal_pov";
    readonly MissionaryPov: "missionary_pov";
    readonly MountOpenTongueOut: "mount_open_tongue_out";
    readonly TendertroupeV01Pony: "tendertroupe_v0.1-pony";
    readonly Nerdy: "nerdy";
    readonly NsfwFilter: "nsfw_filter";
    readonly OrgasmFace: "orgasm_face";
    readonly Overexposed: "overexposed";
    readonly OverexposedPony: "overexposed_pony";
    readonly Pantyhose: "pantyhose";
    readonly PencilDrawing: "pencil_drawing";
    readonly PerfectEyes: "perfect_eyes";
    readonly Punk: "punk";
    readonly PussyCloseupFront: "pussy_closeup_front";
    readonly PussyCloseupRear: "pussy_closeup_rear";
    readonly PussySpread: "pussy_spread";
    readonly PussyToysFront: "pussy_toys_front";
    readonly PussyToysRear: "pussy_toys_rear";
    readonly RealCum: "real_cum";
    readonly RealTentacles: "real_tentacles";
    readonly ReverseCowgirlAnal: "reverse_cowgirl_anal";
    readonly ReverseCowgirlPov: "reverse_cowgirl_pov";
    readonly Rimjob: "rimjob";
    readonly SaggingBreasts: "sagging_breasts";
    readonly Shibbari: "shibbari";
    readonly SpreadAss: "spread_ass";
    readonly SubmissionDogeza: "submission_dogeza";
    readonly SubmissionRestrainedPublic: "submission_restrained_public";
    readonly Tattoos: "tattoos";
    readonly TgirlsV2: "tgirls_v2";
    readonly Titfuck: "titfuck";
    readonly UprightStraddleSex: "upright_straddle_sex";
    readonly Woke: "woke";
    readonly None: "none";
};
export type LoraName = typeof LoraName[keyof typeof LoraName];
/**
 *
 * @export
 */
export declare const MarketingCampaignName: {
    readonly LimitReset: "limit_reset";
    readonly FirstTimeOfferReminder: "first_time_offer_reminder";
    readonly FailedPaymentReminder: "failed_payment_reminder";
};
export type MarketingCampaignName = typeof MarketingCampaignName[keyof typeof MarketingCampaignName];
/**
 *
 * @export
 */
export declare const MemoracekType: {
    readonly NewHonic: "new_honic";
    readonly AttemptedHonic1month: "attempted_honic_1month";
    readonly AttemptedHonic3month: "attempted_honic_3month";
    readonly AttemptedSlevakHonic: "attempted_slevak_honic";
    readonly AttemptedSuperrichHonic1month: "attempted_superrich_honic_1month";
    readonly AttemptedSuperrichHonic3month: "attempted_superrich_honic_3month";
    readonly SlevakHonic: "slevak_honic";
    readonly SubscribedHonic: "subscribed_honic";
    readonly RichHonic: "rich_honic";
    readonly SubscribedSuperrichHonic: "subscribed_superrich_honic";
    readonly GiftCodeRedeemed: "gift_code_redeemed";
    readonly AttemptedRichHonic: "attempted_rich_honic";
    readonly RebilledHonic1month: "rebilled_honic_1month";
    readonly RebilledHonic3month: "rebilled_honic_3month";
};
export type MemoracekType = typeof MemoracekType[keyof typeof MemoracekType];
/**
 *
 * @export
 * @interface MemoryChat
 */
export interface MemoryChat {
    /**
     *
     * @type {string}
     * @memberof MemoryChat
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof MemoryChat
     */
    memory: string;
}
/**
 *
 * @export
 * @interface MemoryUpdateReponse
 */
export interface MemoryUpdateReponse {
    /**
     *
     * @type {number}
     * @memberof MemoryUpdateReponse
     */
    memoryCharCount: number;
}
/**
 *
 * @export
 */
export declare const MessageType: {
    readonly Text: "text";
    readonly Image: "image";
    readonly Video: "video";
};
export type MessageType = typeof MessageType[keyof typeof MessageType];
/**
 *
 * @export
 */
export declare const ModelName: {
    readonly LustifySdxlnsfwV40Alpha: "lustifySDXLNSFW_v40Alpha";
    readonly PrefectPonyXlV40: "prefectPonyXL_v40";
    readonly BigLustV15: "bigLust_v15";
    readonly LustifySdxlnsfwEndgame: "lustifySDXLNSFW_endgame";
    readonly WildcardxXlponyWildcardxXlponyv1: "wildcardxXLPONY_wildcardxXLPONYV1";
    readonly UberRealisticPornMergePonyxlPonyxlHybridV1: "uberRealisticPornMergePonyxl_ponyxlHybridV1";
    readonly BabesByStableYogiPonyV3: "babesByStableYogi_ponyV3";
    readonly WallnutIllustrious: "wallnut_illustrious";
    readonly IllustriousByStableYogi: "illustriousByStableYogi";
};
export type ModelName = typeof ModelName[keyof typeof ModelName];
/**
 *
 * @export
 * @interface NotificationResponse
 */
export interface NotificationResponse {
    /**
     *
     * @type {Array<NotificationResponseNotificationsInner>}
     * @memberof NotificationResponse
     */
    notifications: Array<NotificationResponseNotificationsInner>;
    /**
     *
     * @type {string}
     * @memberof NotificationResponse
     */
    paginationToken: string | null;
}
/**
 *
 * @export
 * @interface NotificationResponseNotificationsInner
 */
export interface NotificationResponseNotificationsInner {
    /**
     *
     * @type {NotificationType}
     * @memberof NotificationResponseNotificationsInner
     */
    notificationType?: NotificationType;
    /**
     *
     * @type {boolean}
     * @memberof NotificationResponseNotificationsInner
     */
    isRead: boolean;
    /**
     *
     * @type {string}
     * @memberof NotificationResponseNotificationsInner
     */
    createdAt: string;
    /**
     *
     * @type {PublicUserPreview}
     * @memberof NotificationResponseNotificationsInner
     */
    sender?: PublicUserPreview;
    /**
     *
     * @type {WallPost}
     * @memberof NotificationResponseNotificationsInner
     */
    post: WallPost;
    /**
     *
     * @type {number}
     * @memberof NotificationResponseNotificationsInner
     */
    totalCount: number;
    /**
     *
     * @type {string}
     * @memberof NotificationResponseNotificationsInner
     */
    chatbotName: string;
    /**
     *
     * @type {PostType}
     * @memberof NotificationResponseNotificationsInner
     */
    type: PostType;
    /**
     *
     * @type {string}
     * @memberof NotificationResponseNotificationsInner
     */
    donationId: string;
    /**
     *
     * @type {number}
     * @memberof NotificationResponseNotificationsInner
     */
    tokens: number;
    /**
     *
     * @type {string}
     * @memberof NotificationResponseNotificationsInner
     */
    message: string;
}
/**
 *
 * @export
 */
export declare const NotificationType: {
    readonly LikePost: "like_post";
    readonly Donation: "donation";
    readonly Follow: "follow";
};
export type NotificationType = typeof NotificationType[keyof typeof NotificationType];
/**
 *
 * @export
 */
export declare const OAuthProvider: {
    readonly Google: "google";
    readonly Discord: "discord";
    readonly X: "x";
    readonly Patreon: "patreon";
};
export type OAuthProvider = typeof OAuthProvider[keyof typeof OAuthProvider];
/**
 *
 * @export
 */
export declare const Occupation: {
    readonly Student: "student";
    readonly Teacher: "teacher";
    readonly Doctor: "doctor";
    readonly Soldier: "soldier";
    readonly Nurse: "nurse";
    readonly Therapist: "therapist";
    readonly Model: "model";
    readonly Policeman: "policeman";
    readonly Domina: "domina";
    readonly YogaInstruction: "yoga_instruction";
    readonly Lawyer: "lawyer";
    readonly Stewardess: "stewardess";
    readonly BusinessOwner: "business_owner";
    readonly Housewife: "housewife";
    readonly Dj: "DJ";
};
export type Occupation = typeof Occupation[keyof typeof Occupation];
/**
 *
 * @export
 */
export declare const OwnerFilter: {
    readonly Featured: "featured";
    readonly Own: "own";
    readonly Liked: "liked";
    readonly Community: "community";
    readonly Followed: "followed";
};
export type OwnerFilter = typeof OwnerFilter[keyof typeof OwnerFilter];
/**
 *
 * @export
 * @interface PatchChatMessageRequest
 */
export interface PatchChatMessageRequest {
    /**
     *
     * @type {ConversationMessageFeedback}
     * @memberof PatchChatMessageRequest
     */
    feedback?: ConversationMessageFeedback | null;
}
/**
 *
 * @export
 * @interface PatchCustomChatbotRequest
 */
export interface PatchCustomChatbotRequest {
    /**
     *
     * @type {string}
     * @memberof PatchCustomChatbotRequest
     */
    displayName: string | null;
    /**
     *
     * @type {string}
     * @memberof PatchCustomChatbotRequest
     */
    profilePictureId: string | null;
    /**
     *
     * @type {string}
     * @memberof PatchCustomChatbotRequest
     */
    profileVideoId: string | null;
    /**
     *
     * @type {string}
     * @memberof PatchCustomChatbotRequest
     */
    bio: string | null;
    /**
     *
     * @type {Array<TagData>}
     * @memberof PatchCustomChatbotRequest
     */
    tags: Array<TagData> | null;
}
/**
 *
 * @export
 * @interface PatchPostTitleRequest
 */
export interface PatchPostTitleRequest {
    /**
     *
     * @type {string}
     * @memberof PatchPostTitleRequest
     */
    title: string;
}
/**
 *
 * @export
 * @interface PatchUserRequest
 */
export interface PatchUserRequest {
    /**
     *
     * @type {string}
     * @memberof PatchUserRequest
     */
    username?: string | null;
    /**
     *
     * @type {UserPreferences}
     * @memberof PatchUserRequest
     */
    preferences?: UserPreferences | null;
    /**
     *
     * @type {LLM}
     * @memberof PatchUserRequest
     */
    llmModel?: LLM | null;
}
/**
 *
 * @export
 */
export declare const PaymentProviderType: {
    readonly Unicorn: "unicorn";
    readonly Corpay: "corpay";
    readonly Patreon: "patreon";
    readonly Truevo: "truevo";
};
export type PaymentProviderType = typeof PaymentProviderType[keyof typeof PaymentProviderType];
/**
 *
 * @export
 */
export declare const Personality: {
    readonly Caregiver: "caregiver";
    readonly Shy: "shy";
    readonly Submissive: "submissive";
    readonly Mean: "mean";
    readonly Dominant: "dominant";
    readonly Flirty: "flirty";
    readonly Lover: "lover";
    readonly Nympho: "nympho";
};
export type Personality = typeof Personality[keyof typeof Personality];
/**
 *
 * @export
 */
export declare const PhotoStyle: {
    readonly Amateur: "amateur";
    readonly Canon: "canon";
};
export type PhotoStyle = typeof PhotoStyle[keyof typeof PhotoStyle];
/**
 *
 * @export
 * @interface PingRequest
 */
export interface PingRequest {
    /**
     *
     * @type {InstanceType}
     * @memberof PingRequest
     */
    type: InstanceType;
    /**
     *
     * @type {InstanceProvider}
     * @memberof PingRequest
     */
    provider: InstanceProvider;
    /**
     *
     * @type {string}
     * @memberof PingRequest
     */
    instanceId: string;
    /**
     *
     * @type {string}
     * @memberof PingRequest
     */
    publicUrl: string;
}
/**
 *
 * @export
 * @interface PostAcceptOfferRequest
 */
export interface PostAcceptOfferRequest {
    /**
     *
     * @type {MarketingCampaignName}
     * @memberof PostAcceptOfferRequest
     */
    campaignName: MarketingCampaignName;
}
/**
 *
 * @export
 * @interface PostAcceptOfferResponse
 */
export interface PostAcceptOfferResponse {
    /**
     *
     * @type {string}
     * @memberof PostAcceptOfferResponse
     */
    acceptedAt: string;
    /**
     *
     * @type {string}
     * @memberof PostAcceptOfferResponse
     */
    expiresAt: string | null;
}
/**
 *
 * @export
 * @interface PostAdvancedChatbotProfilePicture
 */
export interface PostAdvancedChatbotProfilePicture {
    /**
     *
     * @type {string}
     * @memberof PostAdvancedChatbotProfilePicture
     */
    description: string;
    /**
     *
     * @type {ModelName}
     * @memberof PostAdvancedChatbotProfilePicture
     */
    model: ModelName;
    /**
     *
     * @type {Array<LoraName>}
     * @memberof PostAdvancedChatbotProfilePicture
     */
    mods?: Array<LoraName>;
}
/**
 *
 * @export
 * @interface PostAdvancedChatbotPublishPayload
 */
export interface PostAdvancedChatbotPublishPayload {
    /**
     *
     * @type {string}
     * @memberof PostAdvancedChatbotPublishPayload
     */
    referenceAudioId?: string;
}
/**
 *
 * @export
 * @interface PostAdvancedChatbotPublishResponse
 */
export interface PostAdvancedChatbotPublishResponse {
    /**
     *
     * @type {string}
     * @memberof PostAdvancedChatbotPublishResponse
     */
    id: string;
}
/**
 *
 * @export
 * @interface PostCategoryValues
 */
export interface PostCategoryValues {
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    style: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    age: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    gender: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    ethnicity: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    assSize: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    breastSize: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    bodyType: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof PostCategoryValues
     */
    lora: Array<string>;
}
/**
 *
 * @export
 * @interface PostChatRequest
 */
export interface PostChatRequest {
    /**
     *
     * @type {string}
     * @memberof PostChatRequest
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof PostChatRequest
     */
    requestId: string;
    /**
     *
     * @type {string}
     * @memberof PostChatRequest
     */
    query: string;
    /**
     *
     * @type {boolean}
     * @memberof PostChatRequest
     */
    debug?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof PostChatRequest
     */
    conversationId: string;
    /**
     * If true, only image generation will be performed
     * @type {boolean}
     * @memberof PostChatRequest
     */
    onlyImage?: boolean;
    /**
     *
     * @type {ChatMode}
     * @memberof PostChatRequest
     */
    chatMode?: ChatMode | null;
}
/**
 *
 * @export
 * @interface PostCheckoutResponse
 */
export interface PostCheckoutResponse {
    /**
     *
     * @type {string}
     * @memberof PostCheckoutResponse
     */
    action: string;
    /**
     *
     * @type {string}
     * @memberof PostCheckoutResponse
     */
    data: string;
}
/**
 *
 * @export
 * @interface PostCheckoutSessionRequest
 */
export interface PostCheckoutSessionRequest {
    /**
     *
     * @type {string}
     * @memberof PostCheckoutSessionRequest
     */
    planId: string;
    /**
     *
     * @type {string}
     * @memberof PostCheckoutSessionRequest
     */
    successUrl: string;
    /**
     *
     * @type {string}
     * @memberof PostCheckoutSessionRequest
     */
    declinedUrl: string;
}
/**
 *
 * @export
 * @interface PostClaimRequest
 */
export interface PostClaimRequest {
    /**
     *
     * @type {UserClaimType}
     * @memberof PostClaimRequest
     */
    claim: UserClaimType;
}
/**
 *
 * @export
 * @interface PostConversationSettingsRequest
 */
export interface PostConversationSettingsRequest {
    /**
     *
     * @type {ImageSendingMode}
     * @memberof PostConversationSettingsRequest
     */
    imageSendingMode?: ImageSendingMode | null;
    /**
     *
     * @type {ChatMode}
     * @memberof PostConversationSettingsRequest
     */
    chatMode?: ChatMode | null;
    /**
     *
     * @type {boolean}
     * @memberof PostConversationSettingsRequest
     */
    onlySoloImages?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof PostConversationSettingsRequest
     */
    sfwFilterOn?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof PostConversationSettingsRequest
     */
    audioReferenceId?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof PostConversationSettingsRequest
     */
    memoryTurnedOn?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof PostConversationSettingsRequest
     */
    chatbotId: string;
}
/**
 *
 * @export
 * @interface PostCustomAboutPagePayload
 */
export interface PostCustomAboutPagePayload {
    /**
     *
     * @type {string}
     * @memberof PostCustomAboutPagePayload
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomAboutPagePayload
     */
    bio: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomAboutPagePayload
     */
    greetings: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomAboutPagePayload
     */
    story: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomAboutPagePayload
     */
    exampleConversation: string | null;
}
/**
 *
 * @export
 * @interface PostCustomChatBotPayload
 */
export interface PostCustomChatBotPayload {
    /**
     *
     * @type {ModelName}
     * @memberof PostCustomChatBotPayload
     */
    modelName: ModelName;
    /**
     *
     * @type {number}
     * @memberof PostCustomChatBotPayload
     */
    age: number;
    /**
     *
     * @type {AvatarLooks}
     * @memberof PostCustomChatBotPayload
     */
    looks: AvatarLooks;
    /**
     *
     * @type {Personality}
     * @memberof PostCustomChatBotPayload
     */
    personality: Personality;
    /**
     *
     * @type {Array<SpecialFeatures>}
     * @memberof PostCustomChatBotPayload
     */
    specialFeatures: Array<SpecialFeatures>;
    /**
     *
     * @type {RelationshipStatus}
     * @memberof PostCustomChatBotPayload
     */
    relationshipStatus: RelationshipStatus;
    /**
     *
     * @type {AnimeLora}
     * @memberof PostCustomChatBotPayload
     */
    animeLora?: AnimeLora | null;
    /**
     *
     * @type {Ethnicity}
     * @memberof PostCustomChatBotPayload
     */
    ethnicity?: Ethnicity | null;
    /**
     *
     * @type {FantasyRace}
     * @memberof PostCustomChatBotPayload
     */
    fantasyRace?: FantasyRace | null;
    /**
     *
     * @type {Occupation}
     * @memberof PostCustomChatBotPayload
     */
    occupation?: Occupation | null;
    /**
     *
     * @type {Array<Hobby>}
     * @memberof PostCustomChatBotPayload
     */
    hobbies?: Array<Hobby> | null;
    /**
     *
     * @type {string}
     * @memberof PostCustomChatBotPayload
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomChatBotPayload
     */
    userId?: string | null;
}
/**
 *
 * @export
 * @interface PostCustomChatbotResponse
 */
export interface PostCustomChatbotResponse {
    /**
     *
     * @type {string}
     * @memberof PostCustomChatbotResponse
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomChatbotResponse
     */
    isoEta: string;
}
/**
 *
 * @export
 * @interface PostCustomChatbotV2Payload
 */
export interface PostCustomChatbotV2Payload {
    /**
     *
     * @type {number}
     * @memberof PostCustomChatbotV2Payload
     */
    age: number;
    /**
     *
     * @type {Array<SpecialFeatures>}
     * @memberof PostCustomChatbotV2Payload
     */
    specialFeatures: Array<SpecialFeatures>;
    /**
     *
     * @type {ArtStyle}
     * @memberof PostCustomChatbotV2Payload
     */
    artStyle: ArtStyle;
    /**
     *
     * @type {Ethnicity}
     * @memberof PostCustomChatbotV2Payload
     */
    ethnicity?: Ethnicity | null;
    /**
     *
     * @type {FantasyRace}
     * @memberof PostCustomChatbotV2Payload
     */
    fantasyRace?: FantasyRace | null;
    /**
     *
     * @type {VisualType}
     * @memberof PostCustomChatbotV2Payload
     */
    visualType?: VisualType | null;
    /**
     *
     * @type {FurryVisualType}
     * @memberof PostCustomChatbotV2Payload
     */
    furryVisualType?: FurryVisualType | null;
    /**
     *
     * @type {RoleplayType}
     * @memberof PostCustomChatbotV2Payload
     */
    roleplayType?: RoleplayType | null;
    /**
     *
     * @type {AvatarLooksV2}
     * @memberof PostCustomChatbotV2Payload
     */
    looks: AvatarLooksV2;
    /**
     *
     * @type {SeduceDifficulty}
     * @memberof PostCustomChatbotV2Payload
     */
    difficulty: SeduceDifficulty;
    /**
     *
     * @type {string}
     * @memberof PostCustomChatbotV2Payload
     */
    scenario: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomChatbotV2Payload
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomChatbotV2Payload
     */
    referenceAudioId?: string;
    /**
     *
     * @type {string}
     * @memberof PostCustomChatbotV2Payload
     */
    userId?: string | null;
}
/**
 *
 * @export
 * @interface PostDetails
 */
export interface PostDetails {
    /**
     *
     * @type {string}
     * @memberof PostDetails
     */
    postId: string;
    /**
     *
     * @type {number}
     * @memberof PostDetails
     */
    likes: number;
    /**
     *
     * @type {boolean}
     * @memberof PostDetails
     */
    likedByUser: boolean;
}
/**
 *
 * @export
 * @interface PostDetailsWithDate
 */
export interface PostDetailsWithDate {
    /**
     *
     * @type {string}
     * @memberof PostDetailsWithDate
     */
    postId: string;
    /**
     *
     * @type {number}
     * @memberof PostDetailsWithDate
     */
    likes: number;
    /**
     *
     * @type {boolean}
     * @memberof PostDetailsWithDate
     */
    likedByUser: boolean;
    /**
     *
     * @type {string}
     * @memberof PostDetailsWithDate
     */
    createdAt: string;
}
/**
 *
 * @export
 * @interface PostDonateRequest
 */
export interface PostDonateRequest {
    /**
     *
     * @type {string}
     * @memberof PostDonateRequest
     */
    recipientUserId: string;
    /**
     *
     * @type {number}
     * @memberof PostDonateRequest
     */
    tokens: number;
    /**
     *
     * @type {boolean}
     * @memberof PostDonateRequest
     */
    anonymous?: boolean;
    /**
     *
     * @type {string}
     * @memberof PostDonateRequest
     */
    message?: string | null;
}
/**
 *
 * @export
 * @interface PostDonateResponse
 */
export interface PostDonateResponse {
    /**
     *
     * @type {string}
     * @memberof PostDonateResponse
     */
    donationId: string;
    /**
     *
     * @type {number}
     * @memberof PostDonateResponse
     */
    newBalance: number;
}
/**
 *
 * @export
 * @interface PostFollowUserRequest
 */
export interface PostFollowUserRequest {
    /**
     *
     * @type {string}
     * @memberof PostFollowUserRequest
     */
    followeeId: string;
}
/**
 *
 * @export
 * @interface PostImagenRequest
 */
export interface PostImagenRequest {
    /**
     *
     * @type {string}
     * @memberof PostImagenRequest
     */
    query: string;
    /**
     *
     * @type {boolean}
     * @memberof PostImagenRequest
     */
    debug?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof PostImagenRequest
     */
    clientId: string;
    /**
     *
     * @type {string}
     * @memberof PostImagenRequest
     */
    requestId: string;
    /**
     *
     * @type {number}
     * @memberof PostImagenRequest
     */
    numberOfImages: number;
    /**
     *
     * @type {PhotoStyle}
     * @memberof PostImagenRequest
     */
    style: PhotoStyle;
    /**
     *
     * @type {ImageGenerationQuality}
     * @memberof PostImagenRequest
     */
    quality?: ImageGenerationQuality;
    /**
     *
     * @type {Array<LoraName>}
     * @memberof PostImagenRequest
     */
    loras?: Array<LoraName> | null;
}
/**
 *
 * @export
 * @interface PostImagenResponse
 */
export interface PostImagenResponse {
    /**
     *
     * @type {string}
     * @memberof PostImagenResponse
     */
    eta: string;
}
/**
 *
 * @export
 * @interface PostLogin
 */
export interface PostLogin {
    /**
     * The email of the user
     * @type {string}
     * @memberof PostLogin
     */
    email: string;
    /**
     * The password of the user
     * @type {string}
     * @memberof PostLogin
     */
    password: string;
}
/**
 *
 * @export
 * @interface PostPasswordReset
 */
export interface PostPasswordReset {
    /**
     * The new password of the user
     * @type {string}
     * @memberof PostPasswordReset
     */
    newPassword: string;
}
/**
 *
 * @export
 * @interface PostProfilePictureResponse
 */
export interface PostProfilePictureResponse {
    /**
     *
     * @type {CharacterAvatarReview}
     * @memberof PostProfilePictureResponse
     */
    review: CharacterAvatarReview;
    /**
     *
     * @type {boolean}
     * @memberof PostProfilePictureResponse
     */
    generationStated?: boolean;
}
/**
 *
 * @export
 * @interface PostPublishResponse
 */
export interface PostPublishResponse {
    /**
     *
     * @type {string}
     * @memberof PostPublishResponse
     */
    postId: string;
}
/**
 *
 * @export
 * @interface PostRatingRequest
 */
export interface PostRatingRequest {
    /**
     *
     * @type {number}
     * @memberof PostRatingRequest
     */
    girls: number;
    /**
     *
     * @type {number}
     * @memberof PostRatingRequest
     */
    anime: number;
    /**
     *
     * @type {number}
     * @memberof PostRatingRequest
     */
    enoughContent: number;
    /**
     *
     * @type {number}
     * @memberof PostRatingRequest
     */
    chat: number;
    /**
     *
     * @type {string}
     * @memberof PostRatingRequest
     */
    other: string;
}
/**
 *
 * @export
 * @interface PostRatingResponse
 */
export interface PostRatingResponse {
    /**
     *
     * @type {number}
     * @memberof PostRatingResponse
     */
    newBalance: number;
}
/**
 *
 * @export
 * @interface PostReportRequest
 */
export interface PostReportRequest {
    /**
     *
     * @type {Array<ContentReportReason>}
     * @memberof PostReportRequest
     */
    reason: Array<ContentReportReason>;
}
/**
 *
 * @export
 * @interface PostReportUserRequest
 */
export interface PostReportUserRequest {
    /**
     *
     * @type {Array<PublicUserReportReason>}
     * @memberof PostReportUserRequest
     */
    reason: Array<PublicUserReportReason>;
}
/**
 *
 * @export
 * @interface PostResendEmailRequest
 */
export interface PostResendEmailRequest {
    /**
     * The email of the user
     * @type {string}
     * @memberof PostResendEmailRequest
     */
    email: string;
}
/**
 *
 * @export
 * @interface PostSearchRequest
 */
export interface PostSearchRequest {
    /**
     *
     * @type {SortFilter}
     * @memberof PostSearchRequest
     */
    sortFilter?: SortFilter;
    /**
     *
     * @type {string}
     * @memberof PostSearchRequest
     */
    paginationToken?: string | null;
    /**
     *
     * @type {PostType}
     * @memberof PostSearchRequest
     */
    postType?: PostType | null;
    /**
     *
     * @type {CategoryValues}
     * @memberof PostSearchRequest
     */
    tagFilters?: CategoryValues | null;
    /**
     *
     * @type {DateRangeFilter}
     * @memberof PostSearchRequest
     */
    dateFilter?: DateRangeFilter | null;
    /**
     *
     * @type {Array<OwnerFilter>}
     * @memberof PostSearchRequest
     */
    ownerFilters?: Array<OwnerFilter>;
    /**
     *
     * @type {string}
     * @memberof PostSearchRequest
     */
    chatbotId?: string | null;
}
/**
 *
 * @export
 * @interface PostShareGetTagsRequest
 */
export interface PostShareGetTagsRequest {
    /**
     *
     * @type {SharedContentType}
     * @memberof PostShareGetTagsRequest
     */
    sharableContentType: SharedContentType;
}
/**
 *
 * @export
 * @interface PostSharePublishRequest
 */
export interface PostSharePublishRequest {
    /**
     *
     * @type {SharedContentType}
     * @memberof PostSharePublishRequest
     */
    sharableContentType: SharedContentType;
    /**
     *
     * @type {CategoryValues}
     * @memberof PostSharePublishRequest
     */
    tags: CategoryValues;
}
/**
 *
 * @export
 * @interface PostShareTagsResponse
 */
export interface PostShareTagsResponse {
    /**
     *
     * @type {CategoryValues}
     * @memberof PostShareTagsResponse
     */
    tags: CategoryValues;
}
/**
 *
 * @export
 */
export declare const PostType: {
    readonly Image: "image";
    readonly Video: "video";
    readonly Character: "character";
    readonly Media: "media";
    readonly All: "all";
};
export type PostType = typeof PostType[keyof typeof PostType];
/**
 *
 * @export
 * @interface PostUserRequest
 */
export interface PostUserRequest {
    /**
     * The username of the user
     * @type {string}
     * @memberof PostUserRequest
     */
    username: string;
    /**
     * The email of the user
     * @type {string}
     * @memberof PostUserRequest
     */
    email: string;
    /**
     * The password of the user
     * @type {string}
     * @memberof PostUserRequest
     */
    password: string;
    /**
     *
     * @type {boolean}
     * @memberof PostUserRequest
     */
    isDummy?: boolean | null;
}
/**
 *
 * @export
 * @interface PostVastAIStatus
 */
export interface PostVastAIStatus {
    /**
     *
     * @type {string}
     * @memberof PostVastAIStatus
     */
    id: string;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    loadtime: number;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    curLoad: number;
    /**
     *
     * @type {string}
     * @memberof PostVastAIStatus
     */
    errorMsg: string;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    maxPerf: number;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    curPerf: number;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    curCapacity: number;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    maxCapacity: number;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    numRequestsWorking: number;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    numRequestsRecieved: number;
    /**
     *
     * @type {number}
     * @memberof PostVastAIStatus
     */
    additionalDiskUsage: number;
    /**
     *
     * @type {string}
     * @memberof PostVastAIStatus
     */
    url: string;
    /**
     *
     * @type {InstanceType}
     * @memberof PostVastAIStatus
     */
    type: InstanceType;
    /**
     *
     * @type {InstanceProvider}
     * @memberof PostVastAIStatus
     */
    provider: InstanceProvider;
}
/**
 *
 * @export
 * @interface PostVerifyPublicUsernameRequest
 */
export interface PostVerifyPublicUsernameRequest {
    /**
     *
     * @type {string}
     * @memberof PostVerifyPublicUsernameRequest
     */
    publicUsername: string;
}
/**
 *
 * @export
 * @interface PostVerifyPublicUsernameResponse
 */
export interface PostVerifyPublicUsernameResponse {
    /**
     *
     * @type {boolean}
     * @memberof PostVerifyPublicUsernameResponse
     */
    available: boolean;
    /**
     *
     * @type {string}
     * @memberof PostVerifyPublicUsernameResponse
     */
    reason?: string | null;
}
/**
 *
 * @export
 * @interface Preferences
 */
export interface Preferences {
    /**
     *
     * @type {string}
     * @memberof Preferences
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof Preferences
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Preferences
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Preferences
     */
    userId: string;
    /**
     *
     * @type {boolean}
     * @memberof Preferences
     */
    displayGirls?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Preferences
     */
    displayAnime?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Preferences
     */
    displayUnlockWarning?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Preferences
     */
    usernameUpdated?: boolean;
    /**
     *
     * @type {LLM}
     * @memberof Preferences
     */
    llmName?: LLM;
}
/**
 *
 * @export
 * @interface PublicUserInfo
 */
export interface PublicUserInfo {
    /**
     *
     * @type {string}
     * @memberof PublicUserInfo
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof PublicUserInfo
     */
    publicUsername: string;
    /**
     *
     * @type {string}
     * @memberof PublicUserInfo
     */
    avatarUrl?: string | null;
    /**
     *
     * @type {string}
     * @memberof PublicUserInfo
     */
    bio?: string | null;
    /**
     *
     * @type {number}
     * @memberof PublicUserInfo
     */
    following: number;
    /**
     *
     * @type {number}
     * @memberof PublicUserInfo
     */
    followers: number;
    /**
     *
     * @type {number}
     * @memberof PublicUserInfo
     */
    videos: number;
    /**
     *
     * @type {number}
     * @memberof PublicUserInfo
     */
    images: number;
    /**
     *
     * @type {number}
     * @memberof PublicUserInfo
     */
    messages: number;
    /**
     *
     * @type {boolean}
     * @memberof PublicUserInfo
     */
    followed: boolean;
}
/**
 *
 * @export
 * @interface PublicUserPreview
 */
export interface PublicUserPreview {
    /**
     *
     * @type {string}
     * @memberof PublicUserPreview
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof PublicUserPreview
     */
    publicUsername: string;
    /**
     *
     * @type {string}
     * @memberof PublicUserPreview
     */
    avatarUrl?: string | null;
}
/**
 *
 * @export
 * @interface PublicUserPreviewWithFollow
 */
export interface PublicUserPreviewWithFollow {
    /**
     *
     * @type {string}
     * @memberof PublicUserPreviewWithFollow
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof PublicUserPreviewWithFollow
     */
    publicUsername: string;
    /**
     *
     * @type {string}
     * @memberof PublicUserPreviewWithFollow
     */
    avatarUrl?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof PublicUserPreviewWithFollow
     */
    followed: boolean;
}
/**
 *
 * @export
 */
export declare const PublicUserReportReason: {
    readonly Impersonation: "Impersonation";
    readonly HarassmentOrBullying: "HarassmentOrBullying";
    readonly HateSpeech: "HateSpeech";
    readonly Underage: "Underage";
    readonly Other: "Other";
};
export type PublicUserReportReason = typeof PublicUserReportReason[keyof typeof PublicUserReportReason];
/**
 *
 * @export
 * @interface PutPasswordRequest
 */
export interface PutPasswordRequest {
    /**
     *
     * @type {string}
     * @memberof PutPasswordRequest
     */
    password: string;
    /**
     *
     * @type {string}
     * @memberof PutPasswordRequest
     */
    oldPassword: string;
}
/**
 *
 * @export
 * @interface PutPublicUserRequest
 */
export interface PutPublicUserRequest {
    /**
     *
     * @type {string}
     * @memberof PutPublicUserRequest
     */
    publicUsername: string | null;
    /**
     *
     * @type {string}
     * @memberof PutPublicUserRequest
     */
    bio?: string | null;
    /**
     *
     * @type {string}
     * @memberof PutPublicUserRequest
     */
    generatedPictureId?: string | null;
}
/**
 *
 * @export
 * @interface PutUsernameRequest
 */
export interface PutUsernameRequest {
    /**
     *
     * @type {string}
     * @memberof PutUsernameRequest
     */
    username: string;
}
/**
 *
 * @export
 * @interface RedeemGiftCodeRequest
 */
export interface RedeemGiftCodeRequest {
    /**
     *
     * @type {string}
     * @memberof RedeemGiftCodeRequest
     */
    code: string;
}
/**
 *
 * @export
 * @interface RedeemGiftCodeResponse
 */
export interface RedeemGiftCodeResponse {
    /**
     *
     * @type {number}
     * @memberof RedeemGiftCodeResponse
     */
    remainingTokens: number;
    /**
     *
     * @type {number}
     * @memberof RedeemGiftCodeResponse
     */
    addedTokens: number;
}
/**
 *
 * @export
 */
export declare const RelationshipStatus: {
    readonly Girlfriend: "girlfriend";
    readonly Sexfriend: "sexfriend";
    readonly Stepmom: "stepmom";
    readonly Stepsister: "stepsister";
    readonly Colleague: "colleague";
    readonly SchoolMate: "school_mate";
    readonly Wife: "wife";
    readonly Mistress: "mistress";
    readonly Stranger: "stranger";
    readonly Friend: "friend";
};
export type RelationshipStatus = typeof RelationshipStatus[keyof typeof RelationshipStatus];
/**
 *
 * @export
 */
export declare const ReviewCharacterFieldStatus: {
    readonly Ok: "ok";
    readonly ModerationException: "moderation_exception";
    readonly ToBeReviewed: "to_be_reviewed";
};
export type ReviewCharacterFieldStatus = typeof ReviewCharacterFieldStatus[keyof typeof ReviewCharacterFieldStatus];
/**
 *
 * @export
 */
export declare const RoleplayType: {
    readonly FamilyTaboo: "family_taboo";
    readonly Schoolmate: "schoolmate";
    readonly Friend: "friend";
    readonly Gf: "gf";
    readonly Cheating: "cheating";
    readonly Lingerie: "lingerie";
    readonly Corruption: "corruption";
    readonly Cuckolding: "cuckolding";
    readonly Bdsm: "bdsm";
    readonly Milf: "milf";
    readonly Patient: "patient";
    readonly Roommate: "roommate";
    readonly Hypnosis: "hypnosis";
    readonly GuidedJerkoff: "guided_jerkoff";
    readonly Teacher: "teacher";
    readonly Femdom: "femdom";
    readonly PublicPlay: "public_play";
    readonly Coworker: "coworker";
    readonly Breeding: "breeding";
    readonly Humiliation: "humiliation";
    readonly FootFetish: "foot_fetish";
    readonly BratTaming: "brat_taming";
    readonly GothGirl: "goth_girl";
    readonly Bully: "bully";
    readonly Lesbian: "lesbian";
};
export type RoleplayType = typeof RoleplayType[keyof typeof RoleplayType];
/**
 *
 * @export
 */
export declare const SeduceDifficulty: {
    readonly Easy: "easy";
    readonly Medium: "medium";
    readonly Hard: "hard";
    readonly Impossible: "impossible";
};
export type SeduceDifficulty = typeof SeduceDifficulty[keyof typeof SeduceDifficulty];
/**
 *
 * @export
 * @interface SendCustomMemoracekRequest
 */
export interface SendCustomMemoracekRequest {
    /**
     *
     * @type {string}
     * @memberof SendCustomMemoracekRequest
     */
    text: string;
}
/**
 *
 * @export
 * @interface SendMemoracekRequest
 */
export interface SendMemoracekRequest {
    /**
     *
     * @type {MemoracekType}
     * @memberof SendMemoracekRequest
     */
    type: MemoracekType;
}
/**
 *
 * @export
 */
export declare const SharedContentType: {
    readonly Picture: "picture";
    readonly Video: "video";
    readonly Character: "character";
};
export type SharedContentType = typeof SharedContentType[keyof typeof SharedContentType];
/**
 *
 * @export
 */
export declare const SortFilter: {
    readonly Trending: "trending";
    readonly Newest: "newest";
    readonly MostLiked: "most_liked";
    readonly MostMessages: "most_messages";
    readonly LatestMessage: "latest_message";
};
export type SortFilter = typeof SortFilter[keyof typeof SortFilter];
/**
 *
 * @export
 */
export declare const SpecialAddonOffer: {
    readonly None: "none";
    readonly Welcome: "welcome";
    readonly BonusTokens: "bonus_tokens";
    readonly GiftCodes: "gift_codes";
};
export type SpecialAddonOffer = typeof SpecialAddonOffer[keyof typeof SpecialAddonOffer];
/**
 *
 * @export
 */
export declare const SpecialFeatures: {
    readonly Tattoos: "tattoos";
    readonly PubicHair: "pubic_hair";
    readonly Piercing: "piercing";
    readonly Freckles: "freckles";
    readonly Pregnant: "pregnant";
    readonly Glasses: "glasses";
    readonly Futa: "futa";
    readonly Trans: "trans";
    readonly HugeBreasts: "huge_breasts";
    readonly RedLipstick: "red_lipstick";
    readonly LongNails: "long_nails";
    readonly PearlEarrings: "pearl_earrings";
};
export type SpecialFeatures = typeof SpecialFeatures[keyof typeof SpecialFeatures];
/**
 *
 * @export
 */
export declare const SpecialSubscriptionOffer: {
    readonly None: "none";
    readonly BonusTokens: "bonus_tokens";
};
export type SpecialSubscriptionOffer = typeof SpecialSubscriptionOffer[keyof typeof SpecialSubscriptionOffer];
/**
 *
 * @export
 * @interface Status
 */
export interface Status {
}
/**
 *
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    externalId: string;
    /**
     *
     * @type {SubscriptionStatus}
     * @memberof Subscription
     */
    status: SubscriptionStatus;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    tokens?: number;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    nextBillingDate?: string;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    price?: number;
    /**
     *
     * @type {BillingPeriod}
     * @memberof Subscription
     */
    billingPeriod?: BillingPeriod;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    currency: string;
    /**
     *
     * @type {PaymentProviderType}
     * @memberof Subscription
     */
    psp: PaymentProviderType;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    remainingRenewals?: number;
    /**
     *
     * @type {string}
     * @memberof Subscription
     */
    renewalDate: string;
    /**
     *
     * @type {number}
     * @memberof Subscription
     */
    monthlyTokens?: number;
    /**
     *
     * @type {SubscriptionTier}
     * @memberof Subscription
     */
    tier: SubscriptionTier;
}
/**
 *
 * @export
 * @interface SubscriptionModel
 */
export interface SubscriptionModel {
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    userId: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    externalId: string | null;
    /**
     *
     * @type {SubscriptionStatus}
     * @memberof SubscriptionModel
     */
    status: SubscriptionStatus;
    /**
     *
     * @type {number}
     * @memberof SubscriptionModel
     */
    tokens?: number;
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    nextBillingDate?: string;
    /**
     *
     * @type {number}
     * @memberof SubscriptionModel
     */
    price?: number;
    /**
     *
     * @type {BillingPeriod}
     * @memberof SubscriptionModel
     */
    billingPeriod?: BillingPeriod;
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    currency: string | null;
    /**
     *
     * @type {PaymentProviderType}
     * @memberof SubscriptionModel
     */
    psp: PaymentProviderType | null;
    /**
     *
     * @type {number}
     * @memberof SubscriptionModel
     */
    remainingRenewals?: number;
    /**
     *
     * @type {string}
     * @memberof SubscriptionModel
     */
    renewalDate: string | null;
    /**
     *
     * @type {number}
     * @memberof SubscriptionModel
     */
    monthlyTokens?: number;
    /**
     *
     * @type {SubscriptionTier}
     * @memberof SubscriptionModel
     */
    tier: SubscriptionTier | null;
}
/**
 *
 * @export
 * @interface SubscriptionPrice
 */
export interface SubscriptionPrice {
    /**
     *
     * @type {string}
     * @memberof SubscriptionPrice
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPrice
     */
    displayName: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPrice
     */
    displayPrice: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPrice
     */
    currency: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPrice
     */
    code: string;
    /**
     *
     * @type {BillingPeriod}
     * @memberof SubscriptionPrice
     */
    billingPeriod: BillingPeriod;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPrice
     */
    totalPrice: string;
    /**
     *
     * @type {string}
     * @memberof SubscriptionPrice
     */
    discount: string;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPrice
     */
    monthlyTokens: number;
    /**
     *
     * @type {number}
     * @memberof SubscriptionPrice
     */
    singleBonusTokens: number;
    /**
     *
     * @type {boolean}
     * @memberof SubscriptionPrice
     */
    hidden: boolean;
    /**
     *
     * @type {SubscriptionTier}
     * @memberof SubscriptionPrice
     */
    tier: SubscriptionTier;
}
/**
 *
 * @export
 */
export declare const SubscriptionStatus: {
    readonly Inactive: "inactive";
    readonly Active: "active";
    readonly Trial: "trial";
    readonly Canceled: "canceled";
};
export type SubscriptionStatus = typeof SubscriptionStatus[keyof typeof SubscriptionStatus];
/**
 *
 * @export
 */
export declare const SubscriptionTier: {
    readonly Premium: "premium";
    readonly Ultra: "ultra";
};
export type SubscriptionTier = typeof SubscriptionTier[keyof typeof SubscriptionTier];
/**
 *
 * @export
 */
export declare const TagCategory: {
    readonly BaseModel: "base_model";
    readonly HairColor: "hair_color";
    readonly BodyType: "body_type";
    readonly BreastSize: "breast_size";
    readonly AssSize: "ass_size";
    readonly SexPosition: "sex_position";
    readonly Gender: "gender";
    readonly Fetishes: "fetishes";
    readonly Ethnicity: "ethnicity";
    readonly Age: "age";
    readonly Lora: "lora";
    readonly Style: "style";
    readonly RoleplayType: "roleplay_type";
    readonly CharacterType: "character_type";
};
export type TagCategory = typeof TagCategory[keyof typeof TagCategory];
/**
 *
 * @export
 * @interface TagData
 */
export interface TagData {
    /**
     *
     * @type {TagCategory}
     * @memberof TagData
     */
    category: TagCategory;
    /**
     *
     * @type {string}
     * @memberof TagData
     */
    value: string;
}
/**
 *
 * @export
 */
export declare const TagImageLora: {
    readonly Aheago: "aheago";
    readonly Anal: "anal";
    readonly Bdsm: "BDSM";
    readonly Blowjob: "blowjob";
    readonly Bukkake: "bukkake";
    readonly Buttplug: "buttplug";
    readonly Cowgirl: "cowgirl";
    readonly Creampie: "creampie";
    readonly Deepthroath: "deepthroath";
    readonly Dildo: "dildo";
    readonly DoggyStyle: "doggy_style";
    readonly DoublePenetration: "double_penetration";
    readonly Facesitting: "facesitting";
    readonly Facials: "facials";
    readonly Feets: "feets";
    readonly Fingering: "fingering";
    readonly Fisting: "fisting";
    readonly Footjob: "footjob";
    readonly FullNelson: "full_nelson";
    readonly Futa: "futa";
    readonly Gangbang: "gangbang";
    readonly Hairy: "hairy";
    readonly LegsBehindHead: "legs_behind_head";
    readonly Missionary: "missionary";
    readonly Pantyhose: "pantyhose";
    readonly Penis: "penis";
    readonly ReverseCowgirl: "reverse_cowgirl";
    readonly Rimjob: "rimjob";
    readonly SaggingBreasts: "sagging_breasts";
    readonly Sex: "sex";
    readonly Sfw: "sfw";
    readonly Solo: "solo";
    readonly SpreadingAss: "spreading_ass";
    readonly Squirting: "squirting";
    readonly Straddling: "straddling";
    readonly Tattoos: "tattoos";
    readonly Tentacles: "tentacles";
    readonly Titfuck: "titfuck";
};
export type TagImageLora = typeof TagImageLora[keyof typeof TagImageLora];
/**
 *
 * @export
 * @interface TagModel
 */
export interface TagModel {
    /**
     *
     * @type {string}
     * @memberof TagModel
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof TagModel
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof TagModel
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof TagModel
     */
    value: string;
    /**
     *
     * @type {string}
     * @memberof TagModel
     */
    category: string;
}
/**
 *
 * @export
 */
export declare const TagVideoLora: {
    readonly Aheago: "aheago";
    readonly Anal: "anal";
    readonly Bdsm: "BDSM";
    readonly Blowjob: "blowjob";
    readonly BoobBounce: "boob_bounce";
    readonly BreastExpansion: "breast_expansion";
    readonly BreastPlay: "breast_play";
    readonly Bukkake: "bukkake";
    readonly Cowgirl: "cowgirl";
    readonly Creampie: "creampie";
    readonly Cumshot: "cumshot";
    readonly Deepthroat: "deepthroat";
    readonly Dildo: "dildo";
    readonly DoggyStyle: "doggy_style";
    readonly Facials: "facials";
    readonly Feets: "feets";
    readonly Fingering: "fingering";
    readonly Footjob: "footjob";
    readonly Futa: "futa";
    readonly Hanjob: "hanjob";
    readonly Joi: "joi";
    readonly Kissing: "kissing";
    readonly Masturbation: "masturbation";
    readonly MatingPress: "mating_press";
    readonly Missionary: "missionary";
    readonly Orgasm: "orgasm";
    readonly Penis: "penis";
    readonly Pissing: "pissing";
    readonly PussyLicking: "pussy_licking";
    readonly Rimjob: "rimjob";
    readonly Sex: "sex";
    readonly Sfw: "sfw";
    readonly SizeChange: "size_change";
    readonly Solo: "solo";
    readonly Squirting: "squirting";
    readonly StomachBulge: "stomach_bulge";
    readonly Tentacles: "tentacles";
    readonly Titfuck: "titfuck";
    readonly Twerk: "twerk";
};
export type TagVideoLora = typeof TagVideoLora[keyof typeof TagVideoLora];
/**
 *
 * @export
 * @interface TagsExploreTypesGet200ResponseInner
 */
export interface TagsExploreTypesGet200ResponseInner {
}
/**
 *
 * @export
 * @interface TokenReconciliationResponse
 */
export interface TokenReconciliationResponse {
    /**
     *
     * @type {Array<SubscriptionModel>}
     * @memberof TokenReconciliationResponse
     */
    subscriptions: Array<SubscriptionModel>;
}
/**
 *
 * @export
 * @interface Type
 */
export interface Type {
}
/**
 *
 * @export
 */
export declare const UserClaimType: {
    readonly Discord: "discord";
    readonly Reddit: "reddit";
    readonly Instagram: "instagram";
    readonly DailyLogin: "daily_login";
};
export type UserClaimType = typeof UserClaimType[keyof typeof UserClaimType];
/**
 *
 * @export
 * @interface UserInfoResponse
 */
export interface UserInfoResponse {
    /**
     *
     * @type {string}
     * @memberof UserInfoResponse
     */
    userId: string;
    /**
     *
     * @type {UserRole}
     * @memberof UserInfoResponse
     */
    role: UserRole;
    /**
     *
     * @type {string}
     * @memberof UserInfoResponse
     */
    email: string;
    /**
     *
     * @type {string}
     * @memberof UserInfoResponse
     */
    username: string;
    /**
     *
     * @type {PublicUserPreview}
     * @memberof UserInfoResponse
     */
    publicPreview: PublicUserPreview;
    /**
     *
     * @type {boolean}
     * @memberof UserInfoResponse
     */
    oauth: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserInfoResponse
     */
    firstLogin: boolean;
    /**
     *
     * @type {boolean}
     * @memberof UserInfoResponse
     */
    feedbackGiven: boolean;
    /**
     *
     * @type {Array<FeatureFlagName>}
     * @memberof UserInfoResponse
     */
    featureFlags: Array<FeatureFlagName>;
    /**
     *
     * @type {Subscription}
     * @memberof UserInfoResponse
     */
    subscription: Subscription;
    /**
     *
     * @type {Preferences}
     * @memberof UserInfoResponse
     */
    preferences: Preferences;
}
/**
 *
 * @export
 * @interface UserPreferenceModel
 */
export interface UserPreferenceModel {
    /**
     *
     * @type {string}
     * @memberof UserPreferenceModel
     */
    createdAt?: string;
    /**
     *
     * @type {string}
     * @memberof UserPreferenceModel
     */
    updatedAt?: string;
    /**
     *
     * @type {string}
     * @memberof UserPreferenceModel
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof UserPreferenceModel
     */
    userId: string;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferenceModel
     */
    displayGirls?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferenceModel
     */
    displayAnime?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferenceModel
     */
    displayUnlockWarning?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferenceModel
     */
    usernameUpdated?: boolean | null;
    /**
     *
     * @type {LLM}
     * @memberof UserPreferenceModel
     */
    llmName?: LLM | null;
}
/**
 *
 * @export
 * @interface UserPreferences
 */
export interface UserPreferences {
    /**
     *
     * @type {boolean}
     * @memberof UserPreferences
     */
    displayGirls?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferences
     */
    displayAnime?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferences
     */
    displayUnlockWarning?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof UserPreferences
     */
    usernameUpdated?: boolean | null;
}
/**
 *
 * @export
 */
export declare const UserRole: {
    readonly Admin: "admin";
    readonly User: "user";
    readonly Bot: "bot";
    readonly Editor: "editor";
    readonly Tester: "tester";
};
export type UserRole = typeof UserRole[keyof typeof UserRole];
/**
 *
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     *
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    loc: Array<ValidationErrorLocInner>;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    msg: string;
    /**
     *
     * @type {string}
     * @memberof ValidationError
     */
    type: string;
}
/**
 *
 * @export
 * @interface ValidationErrorLocInner
 */
export interface ValidationErrorLocInner {
}
/**
 *
 * @export
 * @interface Value
 */
export interface Value {
}
/**
 *
 * @export
 * @interface VideoContent
 */
export interface VideoContent {
    /**
     *
     * @type {string}
     * @memberof VideoContent
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof VideoContent
     */
    url: string;
    /**
     *
     * @type {string}
     * @memberof VideoContent
     */
    generationId: string;
    /**
     *
     * @type {string}
     * @memberof VideoContent
     */
    originalImageId?: string | null;
}
/**
 *
 * @export
 * @interface VideoFromChatResponse
 */
export interface VideoFromChatResponse {
    /**
     *
     * @type {string}
     * @memberof VideoFromChatResponse
     */
    id: string;
}
/**
 *
 * @export
 */
export declare const VideoGenerationStatus: {
    readonly Started: "started";
    readonly Queued: "queued";
    readonly Running: "running";
    readonly Finished: "finished";
    readonly Failed: "failed";
    readonly MaxConcurencyReached: "max_concurency_reached";
    readonly ModerationException: "moderation_exception";
    readonly NotEnoughTokens: "not_enough_tokens";
    readonly DailyFreeLimitReached: "daily_free_limit_reached";
};
export type VideoGenerationStatus = typeof VideoGenerationStatus[keyof typeof VideoGenerationStatus];
/**
 *
 * @export
 */
export declare const VideoLoraName: {
    readonly PovInsertion: "pov_insertion";
    readonly FacialsV2: "facials_v2";
    readonly CumInMouth: "cum_in_mouth";
    readonly AnimeCumshotHair: "anime_cumshot_hair";
    readonly AnimeFacials: "anime_facials";
    readonly AnimeCumshotMouth: "anime_cumshot_mouth";
    readonly AnimeCumshotTongue: "anime_cumshot_tongue";
    readonly AnimeCumshot: "anime_cumshot";
    readonly MouthfullCumshot: "mouthfull_cumshot";
    readonly BreastExpansion: "breast_expansion";
    readonly Cunnilingus: "cunnilingus";
    readonly Airblowjob: "airblowjob";
    readonly DildoHandjob: "dildo_handjob";
    readonly BreastPlayGrabbingSolo: "breast_play_grabbing_solo";
    readonly BreastPlayGrabbingMan: "breast_play_grabbing_man";
    readonly BreastPlayCoverSolo: "breast_play_cover_solo";
    readonly BreastPlayRubSolo: "breast_play_rub_solo";
    readonly BreastPlayNipplePinch: "breast_play_nipple_pinch";
    readonly BreastPlay: "breast_play";
    readonly PovIntimateContact: "pov_intimate_contact";
    readonly TwerkV2: "twerk_v2";
    readonly HandjobBlowjob: "handjob_blowjob";
    readonly StomachBulgeV2: "stomach_bulge_v2";
    readonly BigSplash: "big_splash";
    readonly FingeringV2: "fingering_v2";
    readonly FaceToFeet: "face_to_feet";
    readonly Meatspin: "meatspin";
    readonly TentaclesV2: "tentacles_v2";
    readonly FutaMasturbationCumshot: "futa_masturbation_cumshot";
    readonly MatingPress: "mating_press";
    readonly FootjobV2: "footjob_v2";
    readonly FutaSoloToSex: "futa_solo_to_sex";
    readonly OrgasmFace: "orgasm_face";
    readonly OrgasmBodyShake: "orgasm_body_shake";
    readonly FootWorshipSucking: "foot_worship_sucking";
    readonly JoiHandGesture: "joi_hand_gesture";
    readonly PenisAndBreastsSizeController: "penis_and_breasts_size_controller";
    readonly FrenchKiss: "french_kiss";
    readonly Creampie: "creampie";
    readonly PovTittyFuck: "pov_titty_fuck";
    readonly PovKissing: "pov_kissing";
    readonly DildoPenetration: "dildo_penetration";
    readonly SexyMoves: "sexy_moves";
    readonly DeepthroatFaceFuck: "deepthroat_face_fuck";
    readonly SmoothAnimation: "smooth_animation";
    readonly PovPulloutCumshotNoTouching: "pov_pullout_cumshot_no_touching";
    readonly PovPulloutCumshotManFinishes: "pov_pullout_cumshot_man_finishes";
    readonly PovPulloutCumshotFemaleFinishes: "pov_pullout_cumshot_female_finishes";
    readonly AhegaoDroolingWithMiddlefinger: "ahegao_drooling_with_middlefinger";
    readonly PenisInsert: "penis_insert";
    readonly SelfNippleSucking: "self_nipple_sucking";
    readonly CumhaterFacial: "cumhater_facial";
    readonly FurryEnhancer: "furry_enhancer";
    readonly Pronebone: "pronebone";
    readonly GaggingDisgustedExpression: "gagging_disgusted_expression";
    readonly FootjobSockjobShoejob: "footjob_sockjob_shoejob";
    readonly BodyGrowth: "body_growth";
    readonly BodyGrowthClothesRipoff: "body_growth_clothes_ripoff";
    readonly AnimeXrayCreampie: "anime_xray_creampie";
    readonly TongueOut: "tongue_out";
    readonly Rimjob: "rimjob";
    readonly BoobBounceV2: "boob_bounce_v2";
    readonly TakerPovBlowjob: "taker_pov_blowjob";
    readonly SpitToCamera: "spit_to_camera";
    readonly RunningBoobBounce: "running_boob_bounce";
    readonly SplitTongue: "split_tongue";
    readonly ThunderGodEyes: "thunder_god_eyes";
    readonly OralPenisInsertion: "oral_penis_insertion";
    readonly FaceToFeetAlternative: "face_to_feet_alternative";
    readonly Deepthroat: "deepthroat";
    readonly ImpliedBlowjob: "implied_blowjob";
    readonly MissionaryV2: "missionary_v2";
    readonly DoggystyleV2: "doggystyle_v2";
    readonly CowgirlV2: "cowgirl_v2";
    readonly BlowjobV2: "blowjob_v2";
    readonly ReverseCowgirl: "reverse_cowgirl";
    readonly DoubleBlowjob: "double_blowjob";
    readonly GeneralSexPoses: "general_sex_poses";
    readonly SeriesOfCumshots: "series_of_cumshots";
    readonly Bukkake: "bukkake";
    readonly FaceDownAssUp: "face_down_ass_up";
    readonly HandjobV2: "handjob_v2";
    readonly HandjobDoublehand: "handjob_doublehand";
    readonly DildoRide: "dildo_ride";
    readonly Anal: "anal";
    readonly FemaleSquirt: "female_squirt";
    readonly Ahegao: "ahegao";
    readonly Bondage: "bondage";
    readonly Dancing: "dancing";
    readonly Spanking: "spanking";
    readonly FemaleMasturbation: "female_masturbation";
    readonly PovDoggyStyle: "pov_doggy_style";
    readonly Blowjob: "blowjob";
    readonly PovMissionary: "pov_missionary";
    readonly PovCowgirl: "pov_cowgirl";
    readonly TittyFuck: "titty_fuck";
    readonly FemaleGenitalsHelpter: "female_genitals_helpter";
    readonly Fingering: "fingering";
    readonly PovDoggyStyle2: "pov_doggy_style2";
    readonly Handjob: "handjob";
    readonly BoobGrab: "boob_grab";
    readonly FootJob: "foot_job";
    readonly Tentacles: "tentacles";
    readonly StomachBulge: "stomach_bulge";
    readonly PovFuttaFelatio: "pov_futta_felatio";
    readonly FutanariMasturbation: "futanari_masturbation";
    readonly BoobsBounce: "boobs_bounce";
    readonly Penis: "penis";
    readonly Cumshot: "cumshot";
    readonly Twerk: "twerk";
    readonly Facials: "facials";
    readonly FaceFuck: "face_fuck";
    readonly BoobsJiggling: "boobs_jiggling";
};
export type VideoLoraName = typeof VideoLoraName[keyof typeof VideoLoraName];
/**
 *
 * @export
 */
export declare const VisualType: {
    readonly Natural: "natural";
    readonly Altgirl: "altgirl";
    readonly Bimbo: "bimbo";
    readonly Cyberpunk: "cyberpunk";
    readonly Dominatrix: "dominatrix";
    readonly Egirl: "egirl";
    readonly Goth: "goth";
    readonly Hipster: "hipster";
    readonly Instachick: "instachick";
    readonly Nordic: "nordic";
    readonly Kawaii: "kawaii";
    readonly Punk: "punk";
    readonly Schoolgirl: "schoolgirl";
    readonly Tomboy: "tomboy";
};
export type VisualType = typeof VisualType[keyof typeof VisualType];
/**
 *
 * @export
 * @interface WallPost
 */
export interface WallPost {
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    creatorId: string;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    chatbotId: string;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    chatbotName: string;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    chatbotProfilePicture: string;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    chatbotProfileVideo: string | null;
    /**
     *
     * @type {boolean}
     * @memberof WallPost
     */
    chatbotPublic: boolean;
    /**
     *
     * @type {Array<ImageContent>}
     * @memberof WallPost
     */
    pictures: Array<ImageContent>;
    /**
     *
     * @type {Array<VideoContent>}
     * @memberof WallPost
     */
    videos: Array<VideoContent>;
    /**
     *
     * @type {number}
     * @memberof WallPost
     */
    likes: number;
    /**
     *
     * @type {number}
     * @memberof WallPost
     */
    messageCount: number | null;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    createdAt: string;
    /**
     *
     * @type {string}
     * @memberof WallPost
     */
    updatedAt: string;
    /**
     *
     * @type {boolean}
     * @memberof WallPost
     */
    liked: boolean;
    /**
     *
     * @type {SharedContentType}
     * @memberof WallPost
     */
    type: SharedContentType;
}
//# sourceMappingURL=index.d.ts.map
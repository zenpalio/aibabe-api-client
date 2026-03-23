/* tslint:disable */
/* eslint-disable */
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
export const AnimeLora = {
    Disney3d: 'disney3d',
    Hentai: 'hentai',
    Cartoon: 'cartoon'
} as const;
export type AnimeLora = typeof AnimeLora[keyof typeof AnimeLora];


/**
 * 
 * @export
 */
export const ArtStyle = {
    Artea: 'artea',
    Fantasy: 'fantasy',
    Anime3d: 'anime3d',
    Cartoon: 'cartoon',
    Truelook: 'truelook',
    Velvetheat: 'velvetheat',
    Dreammix: 'dreammix'
} as const;
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
export const BillingPeriod = {
    Monthly: 'monthly',
    Quarterly: 'quarterly',
    Yearly: 'yearly'
} as const;
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
export const BodyType = {
    Slim: 'slim',
    Athletic: 'athletic',
    Voluptuous: 'voluptuous',
    Curvy: 'curvy'
} as const;
export type BodyType = typeof BodyType[keyof typeof BodyType];


/**
 * 
 * @export
 */
export const BreastSize = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Huge: 'huge'
} as const;
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
export const ButtSize = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Huge: 'huge'
} as const;
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
export const ChatMode = {
    Chat: 'chat',
    Roleplaying: 'roleplaying'
} as const;
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
export const ChatRole = {
    User: 'user',
    Assistant: 'assistant'
} as const;
export type ChatRole = typeof ChatRole[keyof typeof ChatRole];


/**
 * 
 * @export
 */
export const ChatbotCreatedOrigin = {
    Custom: 'custom',
    Advanced: 'advanced'
} as const;
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
export const ChatbotType = {
    Girls: 'girls',
    Anime: 'anime',
    Boys: 'boys',
    Internal: 'internal',
    Fantasy: 'fantasy'
} as const;
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
export const ContentReportReason = {
    UnderageContent: 'UnderageContent',
    Incest: 'Incest',
    GoreOrRape: 'GoreOrRape',
    AdsOrSpam: 'AdsOrSpam',
    Copyright: 'Copyright',
    Other: 'Other'
} as const;
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
export const ConversationMessageFeedback = {
    Positive: 'positive',
    Negative: 'negative'
} as const;
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
export const DateRangeFilter = {
    Day: 'day',
    Week: 'week',
    Month: 'month',
    Year: 'year',
    AllTime: 'all_time'
} as const;
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
export const Ethnicity = {
    Asian: 'asian',
    Black: 'black',
    Caucasian: 'caucasian',
    Arab: 'arab',
    Latina: 'latina',
    Indian: 'indian',
    Furry: 'furry'
} as const;
export type Ethnicity = typeof Ethnicity[keyof typeof Ethnicity];


/**
 * 
 * @export
 */
export const ExceptionCode = {
    InternalError: 'internal_error',
    AuthInvalidCredentials: 'auth_invalid_credentials',
    AuthInvalidPassword: 'auth_invalid_password',
    AuthNotVerified: 'auth_not_verified',
    AuthOauthOnly: 'auth_oauth_only',
    UserAlreadyExists: 'user_already_exists',
    UserNotFound: 'user_not_found',
    UserNotSubscribed: 'user_not_subscribed',
    UserIdentityRequired: 'user_identity_required',
    UserEmailRequired: 'user_email_required',
    UserEmailInvalid: 'user_email_invalid',
    UserSelfActionForbidden: 'user_self_action_forbidden',
    UserNotFoundOrInsufficientPermissions: 'user_not_found_or_insufficient_permissions',
    UserIdNotPresent: 'user_id_not_present',
    EmailAddressUsed: 'email_address_used',
    EmailAddressUsedRecently: 'email_address_used_recently',
    PublicUserNotFound: 'public_user_not_found',
    PublicUsernameTaken: 'public_username_taken',
    PublicUsernameRequired: 'public_username_required',
    PublicUsernameUnavailable: 'public_username_unavailable',
    DonorNotFound: 'donor_not_found',
    RecipientNotFound: 'recipient_not_found',
    ChatbotNotFound: 'chatbot_not_found',
    ChatbotBlueprintNotFound: 'chatbot_blueprint_not_found',
    AdvancedChatbotBuilderInProgressNotFound: 'advanced_chatbot_builder_in_progress_not_found',
    AdvancedChatbotBuilderInconsistentData: 'advanced_chatbot_builder_inconsistent_data',
    AdvancedCharacterBuilderDataMissing: 'advanced_character_builder_data_missing',
    CharacterProfileTagsInvalid: 'character_profile_tags_invalid',
    CharacterProfileAgeInvalid: 'character_profile_age_invalid',
    CharacterProfileGenderMissing: 'character_profile_gender_missing',
    CustomCharactersLimitReached: 'custom_characters_limit_reached',
    FreemiumLimitsReached: 'freemium_limits_reached',
    ChatbotNotOwnedOrNotCustom: 'chatbot_not_owned_or_not_custom',
    ChatbotNonOwnedForbidden: 'chatbot_non_owned_forbidden',
    ChatbotNameTooLong: 'chatbot_name_too_long',
    ProfileVideoNotFound: 'profile_video_not_found',
    ConversationNotFound: 'conversation_not_found',
    ConversationUpdateNonOwnedForbidden: 'conversation_update_non_owned_forbidden',
    ConversationResetNonOwnedForbidden: 'conversation_reset_non_owned_forbidden',
    ConversationMemoryNotFound: 'conversation_memory_not_found',
    MessageNotFound: 'message_not_found',
    PinnedMemoryNotFound: 'pinned_memory_not_found',
    AboutUserTooLong: 'about_user_too_long',
    AboutUserModerationException: 'about_user_moderation_exception',
    MessageModerationFlagged: 'message_moderation_flagged',
    PinnedMemoryCharLimitExceeded: 'pinned_memory_char_limit_exceeded',
    TokensInsufficient: 'tokens_insufficient',
    TokensInvalidAmount: 'tokens_invalid_amount',
    LimitsReached: 'limits_reached',
    ClaimInvalid: 'claim_invalid',
    ClaimablesNotFound: 'claimables_not_found',
    FormatNotSupported: 'format_not_supported',
    FileSizeExceeded: 'file_size_exceeded',
    FileUploadFailed: 'file_upload_failed',
    FileNotFound: 'file_not_found',
    InvalidPictureType: 'invalid_picture_type',
    ImageNotFound: 'image_not_found',
    ImageNotOwned: 'image_not_owned',
    VideoNotFound: 'video_not_found',
    VideoNotOwned: 'video_not_owned',
    VideoUploadImageFailed: 'video_upload_image_failed',
    VideoRetrieveFailed: 'video_retrieve_failed',
    VideoGenerationLimitReached: 'video_generation_limit_reached',
    GenerationTagsNotFound: 'generation_tags_not_found',
    VerificationCodeExprired: 'verification_code_exprired',
    VerificationCodeInvalid: 'verification_code_invalid',
    VerificationCodeNotSet: 'verification_code_not_set',
    PostNotFound: 'post_not_found',
    PostLocked: 'post_locked',
    PostDeleteNotAuthorized: 'post_delete_not_authorized',
    PostUpdateNotAuthorized: 'post_update_not_authorized',
    PostReportContentMissing: 'post_report_content_missing',
    ShareContentTypeUnsupported: 'share_content_type_unsupported',
    ShareVideoNonOwnedForbidden: 'share_video_non_owned_forbidden',
    ShareImageNonOwnedForbidden: 'share_image_non_owned_forbidden',
    ShareCharacterNonOwnedForbidden: 'share_character_non_owned_forbidden',
    CharacterNotFound: 'character_not_found',
    InvalidPlanId: 'invalid_plan_id',
    InvalidAddonId: 'invalid_addon_id',
    TransactionNotFound: 'transaction_not_found',
    GiftCodeNotFoundOrUsed: 'gift_code_not_found_or_used',
    LeaderOnlyAction: 'leader_only_action',
    ServerNotFound: 'server_not_found',
    WebsocketServerNotAvailable: 'websocket_server_not_available',
    LlmModelNotAvailable: 'llm_model_not_available',
    EmailSendFailed: 'email_send_failed',
    InvalidParams: 'invalid_params',
    ModerationFlagged: 'moderation_flagged',
    MarketingCampaignNotFound: 'marketing_campaign_not_found',
    MarketingCampaignNotAcceptable: 'marketing_campaign_not_acceptable',
    MarketingCampaignNoState: 'marketing_campaign_no_state'
} as const;
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
export const EyeColor = {
    Blue: 'blue',
    Brown: 'brown',
    Green: 'green'
} as const;
export type EyeColor = typeof EyeColor[keyof typeof EyeColor];


/**
 * 
 * @export
 */
export const FantasyRace = {
    Alien: 'alien',
    Android: 'android',
    Barbarian: 'barbarian',
    Cyborg: 'cyborg',
    DarkElf: 'dark_elf',
    DragonQueen: 'dragon_queen',
    Dryad: 'dryad',
    ForestNymph: 'forest_nymph',
    Elf: 'elf',
    ElfPriestess: 'elf_priestess',
    Fairy: 'fairy',
    Ghost: 'ghost',
    Goddess: 'goddess',
    Human: 'human',
    Mage: 'mage',
    Mermaid: 'mermaid',
    Orc: 'orc',
    Succubus: 'succubus',
    Superhero: 'superhero',
    Tentacle: 'tentacle',
    Valkyrie: 'valkyrie',
    Witch: 'witch'
} as const;
export type FantasyRace = typeof FantasyRace[keyof typeof FantasyRace];


/**
 * 
 * @export
 */
export const FeatureFlagName = {
    GrokModeration: 'GROK_MODERATION',
    MarketingBanners: 'MARKETING_BANNERS'
} as const;
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
export const FurryVisualType = {
    Catgirl: 'catgirl',
    Wolfgirl: 'wolfgirl',
    Foxgirl: 'foxgirl',
    Bunnygirl: 'bunnygirl',
    Cowgirl: 'cowgirl',
    Sharkgirl: 'sharkgirl',
    Tigergirl: 'tigergirl',
    Dragoness: 'dragoness'
} as const;
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
export const GeneratedAudioStatus = {
    Started: 'started',
    Queued: 'queued',
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed',
    MaxConcurencyReached: 'max_concurency_reached',
    ModerationException: 'moderation_exception',
    NotEnoughTokens: 'not_enough_tokens',
    DailyFreeLimitReached: 'daily_free_limit_reached'
} as const;
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
export const GeneratedImagesTypeEnum = {
    GeneratedImages: 'generatedImages',
    GeneratedVideos: 'generatedVideos'
} as const;
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
export const GeneratedVideosTypeEnum = {
    GeneratedImages: 'generatedImages',
    GeneratedVideos: 'generatedVideos'
} as const;
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
export const GetGalleryResponseItemsInnerTypeEnum = {
    GeneratedImages: 'generatedImages',
    GeneratedVideos: 'generatedVideos'
} as const;
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
    subscriptions: { [key: string]: Array<SubscriptionPrice>; };
    /**
     * 
     * @type {{ [key: string]: Array<AddonPrice>; }}
     * @memberof GetPricesResponse
     */
    addons: { [key: string]: Array<AddonPrice>; };
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
export const GiftCodeType = {
    _100: 'tokens_100',
    _200: 'tokens_200',
    _500: 'tokens_500',
    _1200: 'tokens_1200'
} as const;
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
export const HairColor = {
    Blonde: 'blonde',
    Brunette: 'brunette',
    Black: 'black',
    Pink: 'pink',
    DarkBrownHair: 'Dark Brown Hair',
    Blue: 'blue',
    Chestnut: 'chestnut',
    Ginger: 'ginger',
    DarkRed: 'dark red',
    LightBlue: 'light blue',
    DarkBlue: 'dark blue',
    DarkPurple: 'dark purple',
    Green: 'green',
    Grey: 'grey',
    White: 'white',
    TealWithPurpleHighlightHair: 'teal with purple highlight hair',
    RainbowColors: 'rainbow colors',
    BlondeHairWithPinkBalayage: 'blonde hair with pink balayage',
    PurpleHairWithPinkBalayage: 'purple hair with pink balayage',
    BlondeHairWithPinkOmbre: 'blonde hair with pink ombre',
    PlatiniumBlonde: 'platinium blonde',
    Random: 'random'
} as const;
export type HairColor = typeof HairColor[keyof typeof HairColor];


/**
 * 
 * @export
 */
export const HairStyle = {
    Short: 'short',
    Braids: 'braids',
    Curly: 'curly',
    Straight: 'straight',
    Bun: 'bun',
    Ponytail: 'ponytail',
    ShoulderLengthStraight: 'shoulder length straight',
    VeryLongWave: 'very long wave',
    LooseWave: 'loose wave',
    CurlyFrizzy: 'curly frizzy',
    CurlyShort: 'curly short',
    Ringlets: 'ringlets',
    StackedCurlsInShortBlob: 'stacked curls in Short Blob',
    BlobHaircut: 'Blob haircut',
    BluntBlobHaircut: 'Blunt Blob haircut',
    BowlCut: 'Bowl cut',
    ShoulderLengthWithBangs: 'shoulder length with bangs',
    LongHairWithBangs: 'long hair with bangs',
    Updo: 'updo',
    Chignon: 'chignon',
    DoubleBun: 'double bun',
    Twintails: 'twintails',
    SideBraid: 'side braid',
    FishtailBraid: 'fishtail braid',
    BoxBraids: 'box braids',
    ShortCurlyPixieCut: 'short curly pixie cut',
    PixieCut: 'pixie cut',
    TomboyCut: 'tomboy cut',
    HighPonytail: 'high ponytail',
    LongPonytail: 'long ponytail',
    Cornrows: 'cornrows',
    Dreadlocks: 'dreadlocks',
    LooseCurlyAfro: 'loose curly afro',
    Afro: 'afro',
    Cloudy: 'cloudy',
    Crimped: 'crimped',
    BuzzCut: 'buzz cut',
    Bald: 'bald',
    BleachedSpikes: 'bleached spikes',
    Spiky: 'spiky',
    Mohawk: 'mohawk',
    FrenchTwist: 'french twist',
    Beehive: 'beehive',
    Pompadour: 'pompadour',
    QuiffHaircut: 'quiff haircut',
    CrazyFuturistic: 'crazy futuristic',
    CrazyPunk: 'crazy punk',
    CrazyVintage: 'crazy vintage',
    PinterestMultiple: 'pinterest multiple',
    MegaTwinDrillstwintails: 'mega twin drills,twintails',
    MegaPonytail: 'mega ponytail',
    Big: 'big'
} as const;
export type HairStyle = typeof HairStyle[keyof typeof HairStyle];


/**
 * 
 * @export
 */
export const Hobby = {
    Reading: 'reading',
    Writing: 'writing',
    Youtube: 'youtube',
    TvSeries: 'tv_series',
    Anime: 'anime',
    Cosplay: 'cosplay',
    Hiking: 'hiking',
    Manga: 'manga',
    Streaming: 'streaming',
    Yoga: 'yoga',
    TikTok: 'tik_tok',
    Photography: 'photography',
    Traveling: 'traveling',
    Dancing: 'dancing',
    VideoGames: 'video_games',
    Memes: 'memes',
    Podcasts: 'podcasts',
    DigitalArt: 'digital_art',
    Movies: 'movies',
    Fitness: 'fitness',
    Cooking: 'cooking',
    Fishing: 'fishing',
    Camping: 'camping',
    Chess: 'chess',
    BoardGames: 'board_games',
    Vlogging: 'vlogging',
    Sports: 'sports',
    Puzzles: 'puzzles'
} as const;
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
export const ImageGenerationQuality = {
    Low: 'low',
    High: 'high'
} as const;
export type ImageGenerationQuality = typeof ImageGenerationQuality[keyof typeof ImageGenerationQuality];


/**
 * 
 * @export
 */
export const ImageGenerationSource = {
    Chat: 'chat',
    Generator: 'generator'
} as const;
export type ImageGenerationSource = typeof ImageGenerationSource[keyof typeof ImageGenerationSource];


/**
 * 
 * @export
 */
export const ImageGenerationStatus = {
    Started: 'started',
    Queued: 'queued',
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed',
    MaxConcurencyReached: 'max_concurency_reached',
    ModerationException: 'moderation_exception',
    NotEnoughTokens: 'not_enough_tokens',
    DailyFreeLimitReached: 'daily_free_limit_reached'
} as const;
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
export const ImageSendingMode = {
    Dynamic: 'dynamic',
    Request: 'request',
    Off: 'off'
} as const;
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
export const InstanceProvider = {
    Runpod: 'runpod',
    Vastai: 'vastai'
} as const;
export type InstanceProvider = typeof InstanceProvider[keyof typeof InstanceProvider];


/**
 * 
 * @export
 */
export const InstanceType = {
    Automatic1111: 'automatic1111',
    Tgi: 'tgi',
    Video: 'video',
    Audio: 'audio'
} as const;
export type InstanceType = typeof InstanceType[keyof typeof InstanceType];


/**
 * 
 * @export
 */
export const LLM = {
    Gemma: 'gemma',
    Llama: 'llama',
    Lemonade: 'lemonade',
    Qwen3: 'qwen3',
    LemonadePremium: 'lemonade_premium',
    GemmaPremium: 'gemma_premium'
} as const;
export type LLM = typeof LLM[keyof typeof LLM];


/**
 * 
 * @export
 */
export const Language = {
    En: 'en',
    De: 'de',
    Fr: 'fr',
    Es: 'es',
    It: 'it',
    Cs: 'cs',
    Pl: 'pl'
} as const;
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
export const LoraName = {
    Aesthetic: 'aesthetic',
    Aheago: 'aheago',
    Anal: 'anal',
    AnalAllPoses: 'anal_all_poses',
    AnalBeads: 'anal_beads',
    Analogue: 'analogue',
    Bimbo: 'bimbo',
    Blowjob: 'blowjob',
    Bukkake: 'bukkake',
    Buttplug: 'buttplug',
    Choking: 'choking',
    CowgirlPov: 'cowgirl_pov',
    Creampie: 'creampie',
    Cyberpunk: 'cyberpunk',
    DeepthroathNoseSnot: 'deepthroath_nose_snot',
    DeepthroathSideways: 'deepthroath_sideways',
    DeepthroathSloppy: 'deepthroath_sloppy',
    DetailTweaker: 'detail_tweaker',
    DetailedPainting: 'detailed_painting',
    _3DanimationDisney10: '3Danimation_Disney_1.0',
    DoggyStyleAnal: 'doggy_style_anal',
    DoggyStyleVaginal: 'doggy_style_vaginal',
    DoublePenentration: 'double_penentration',
    DramaticLighting: 'dramatic_lighting',
    DramaticLightingPony: 'dramatic_lighting_pony',
    Ebony: 'ebony',
    EyesForPony: 'eyes_for_pony',
    ExpressiveH: 'Expressive_H',
    FacesitAnime: 'facesit_anime',
    Facesitting: 'facesitting',
    Facials: 'facials',
    Feet: 'feet',
    FemaleEjaculation: 'female_ejaculation',
    FingerInAss: 'finger_in_ass',
    Fingering: 'fingering',
    Fisting: 'fisting',
    FistingAnal: 'fisting_anal',
    Footjob: 'footjob',
    FootjobPony: 'footjob_pony',
    FullNelson: 'full_nelson',
    FutanariErect: 'futanari_erect',
    FutanariFlaccid: 'futanari_flaccid',
    FutanariRealistic: 'futanari_realistic',
    G0th1cPxl: 'g0th1cPXL',
    GhoticGirl: 'ghotic_girl',
    HairyArmpit: 'hairy_armpit',
    HairyPussy: 'hairy_pussy',
    HiddenSpycam: 'hidden_spycam',
    HiddenSpycamPony: 'hidden_spycam_pony',
    IncaseStyle: 'incase_style',
    Indian: 'indian',
    Kawaii: 'kawaii',
    LeakedNudes: 'leaked_nudes',
    LegsBehindHead: 'legs_behind_head',
    LegsBehindHeadPony: 'legs_behind_head_pony',
    MirrorSelfie: 'mirror_selfie',
    MissionaryAnalPov: 'missionary_anal_pov',
    MissionaryPov: 'missionary_pov',
    MountOpenTongueOut: 'mount_open_tongue_out',
    TendertroupeV01Pony: 'tendertroupe_v0.1-pony',
    Nerdy: 'nerdy',
    NsfwFilter: 'nsfw_filter',
    OrgasmFace: 'orgasm_face',
    Overexposed: 'overexposed',
    OverexposedPony: 'overexposed_pony',
    Pantyhose: 'pantyhose',
    PencilDrawing: 'pencil_drawing',
    PerfectEyes: 'perfect_eyes',
    Punk: 'punk',
    PussyCloseupFront: 'pussy_closeup_front',
    PussyCloseupRear: 'pussy_closeup_rear',
    PussySpread: 'pussy_spread',
    PussyToysFront: 'pussy_toys_front',
    PussyToysRear: 'pussy_toys_rear',
    RealCum: 'real_cum',
    RealTentacles: 'real_tentacles',
    ReverseCowgirlAnal: 'reverse_cowgirl_anal',
    ReverseCowgirlPov: 'reverse_cowgirl_pov',
    Rimjob: 'rimjob',
    SaggingBreasts: 'sagging_breasts',
    Shibbari: 'shibbari',
    SpreadAss: 'spread_ass',
    SubmissionDogeza: 'submission_dogeza',
    SubmissionRestrainedPublic: 'submission_restrained_public',
    Tattoos: 'tattoos',
    TgirlsV2: 'tgirls_v2',
    Titfuck: 'titfuck',
    UprightStraddleSex: 'upright_straddle_sex',
    Woke: 'woke',
    None: 'none'
} as const;
export type LoraName = typeof LoraName[keyof typeof LoraName];


/**
 * 
 * @export
 */
export const MarketingCampaignName = {
    LimitReset: 'limit_reset',
    FirstTimeOfferReminder: 'first_time_offer_reminder',
    FailedPaymentReminder: 'failed_payment_reminder'
} as const;
export type MarketingCampaignName = typeof MarketingCampaignName[keyof typeof MarketingCampaignName];


/**
 * 
 * @export
 */
export const MemoracekType = {
    NewHonic: 'new_honic',
    AttemptedHonic1month: 'attempted_honic_1month',
    AttemptedHonic3month: 'attempted_honic_3month',
    AttemptedSlevakHonic: 'attempted_slevak_honic',
    AttemptedSuperrichHonic1month: 'attempted_superrich_honic_1month',
    AttemptedSuperrichHonic3month: 'attempted_superrich_honic_3month',
    SlevakHonic: 'slevak_honic',
    SubscribedHonic: 'subscribed_honic',
    RichHonic: 'rich_honic',
    SubscribedSuperrichHonic: 'subscribed_superrich_honic',
    GiftCodeRedeemed: 'gift_code_redeemed',
    AttemptedRichHonic: 'attempted_rich_honic',
    RebilledHonic1month: 'rebilled_honic_1month',
    RebilledHonic3month: 'rebilled_honic_3month'
} as const;
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
export const MessageType = {
    Text: 'text',
    Image: 'image',
    Video: 'video'
} as const;
export type MessageType = typeof MessageType[keyof typeof MessageType];


/**
 * 
 * @export
 */
export const ModelName = {
    LustifySdxlnsfwV40Alpha: 'lustifySDXLNSFW_v40Alpha',
    PrefectPonyXlV40: 'prefectPonyXL_v40',
    BigLustV15: 'bigLust_v15',
    LustifySdxlnsfwEndgame: 'lustifySDXLNSFW_endgame',
    WildcardxXlponyWildcardxXlponyv1: 'wildcardxXLPONY_wildcardxXLPONYV1',
    UberRealisticPornMergePonyxlPonyxlHybridV1: 'uberRealisticPornMergePonyxl_ponyxlHybridV1',
    BabesByStableYogiPonyV3: 'babesByStableYogi_ponyV3',
    WallnutIllustrious: 'wallnut_illustrious',
    IllustriousByStableYogi: 'illustriousByStableYogi'
} as const;
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
export const NotificationType = {
    LikePost: 'like_post',
    Donation: 'donation',
    Follow: 'follow'
} as const;
export type NotificationType = typeof NotificationType[keyof typeof NotificationType];


/**
 * 
 * @export
 */
export const OAuthProvider = {
    Google: 'google',
    Discord: 'discord',
    X: 'x',
    Patreon: 'patreon'
} as const;
export type OAuthProvider = typeof OAuthProvider[keyof typeof OAuthProvider];


/**
 * 
 * @export
 */
export const Occupation = {
    Student: 'student',
    Teacher: 'teacher',
    Doctor: 'doctor',
    Soldier: 'soldier',
    Nurse: 'nurse',
    Therapist: 'therapist',
    Model: 'model',
    Policeman: 'policeman',
    Domina: 'domina',
    YogaInstruction: 'yoga_instruction',
    Lawyer: 'lawyer',
    Stewardess: 'stewardess',
    BusinessOwner: 'business_owner',
    Housewife: 'housewife',
    Dj: 'DJ'
} as const;
export type Occupation = typeof Occupation[keyof typeof Occupation];


/**
 * 
 * @export
 */
export const OwnerFilter = {
    Featured: 'featured',
    Own: 'own',
    Liked: 'liked',
    Community: 'community',
    Followed: 'followed'
} as const;
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
export const PaymentProviderType = {
    Unicorn: 'unicorn',
    Corpay: 'corpay',
    Patreon: 'patreon',
    Truevo: 'truevo'
} as const;
export type PaymentProviderType = typeof PaymentProviderType[keyof typeof PaymentProviderType];


/**
 * 
 * @export
 */
export const Personality = {
    Caregiver: 'caregiver',
    Shy: 'shy',
    Submissive: 'submissive',
    Mean: 'mean',
    Dominant: 'dominant',
    Flirty: 'flirty',
    Lover: 'lover',
    Nympho: 'nympho'
} as const;
export type Personality = typeof Personality[keyof typeof Personality];


/**
 * 
 * @export
 */
export const PhotoStyle = {
    Amateur: 'amateur',
    Canon: 'canon'
} as const;
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
export const PostType = {
    Image: 'image',
    Video: 'video',
    Character: 'character',
    Media: 'media',
    All: 'all'
} as const;
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
export const PublicUserReportReason = {
    Impersonation: 'Impersonation',
    HarassmentOrBullying: 'HarassmentOrBullying',
    HateSpeech: 'HateSpeech',
    Underage: 'Underage',
    Other: 'Other'
} as const;
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
export const RelationshipStatus = {
    Girlfriend: 'girlfriend',
    Sexfriend: 'sexfriend',
    Stepmom: 'stepmom',
    Stepsister: 'stepsister',
    Colleague: 'colleague',
    SchoolMate: 'school_mate',
    Wife: 'wife',
    Mistress: 'mistress',
    Stranger: 'stranger',
    Friend: 'friend'
} as const;
export type RelationshipStatus = typeof RelationshipStatus[keyof typeof RelationshipStatus];


/**
 * 
 * @export
 */
export const ReviewCharacterFieldStatus = {
    Ok: 'ok',
    ModerationException: 'moderation_exception',
    ToBeReviewed: 'to_be_reviewed'
} as const;
export type ReviewCharacterFieldStatus = typeof ReviewCharacterFieldStatus[keyof typeof ReviewCharacterFieldStatus];


/**
 * 
 * @export
 */
export const RoleplayType = {
    FamilyTaboo: 'family_taboo',
    Schoolmate: 'schoolmate',
    Friend: 'friend',
    Gf: 'gf',
    Cheating: 'cheating',
    Lingerie: 'lingerie',
    Corruption: 'corruption',
    Cuckolding: 'cuckolding',
    Bdsm: 'bdsm',
    Milf: 'milf',
    Patient: 'patient',
    Roommate: 'roommate',
    Hypnosis: 'hypnosis',
    GuidedJerkoff: 'guided_jerkoff',
    Teacher: 'teacher',
    Femdom: 'femdom',
    PublicPlay: 'public_play',
    Coworker: 'coworker',
    Breeding: 'breeding',
    Humiliation: 'humiliation',
    FootFetish: 'foot_fetish',
    BratTaming: 'brat_taming',
    GothGirl: 'goth_girl',
    Bully: 'bully',
    Lesbian: 'lesbian'
} as const;
export type RoleplayType = typeof RoleplayType[keyof typeof RoleplayType];


/**
 * 
 * @export
 */
export const SeduceDifficulty = {
    Easy: 'easy',
    Medium: 'medium',
    Hard: 'hard',
    Impossible: 'impossible'
} as const;
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
export const SharedContentType = {
    Picture: 'picture',
    Video: 'video',
    Character: 'character'
} as const;
export type SharedContentType = typeof SharedContentType[keyof typeof SharedContentType];


/**
 * 
 * @export
 */
export const SortFilter = {
    Trending: 'trending',
    Newest: 'newest',
    MostLiked: 'most_liked',
    MostMessages: 'most_messages',
    LatestMessage: 'latest_message'
} as const;
export type SortFilter = typeof SortFilter[keyof typeof SortFilter];


/**
 * 
 * @export
 */
export const SpecialAddonOffer = {
    None: 'none',
    Welcome: 'welcome',
    BonusTokens: 'bonus_tokens',
    GiftCodes: 'gift_codes'
} as const;
export type SpecialAddonOffer = typeof SpecialAddonOffer[keyof typeof SpecialAddonOffer];


/**
 * 
 * @export
 */
export const SpecialFeatures = {
    Tattoos: 'tattoos',
    PubicHair: 'pubic_hair',
    Piercing: 'piercing',
    Freckles: 'freckles',
    Pregnant: 'pregnant',
    Glasses: 'glasses',
    Futa: 'futa',
    Trans: 'trans',
    HugeBreasts: 'huge_breasts',
    RedLipstick: 'red_lipstick',
    LongNails: 'long_nails',
    PearlEarrings: 'pearl_earrings'
} as const;
export type SpecialFeatures = typeof SpecialFeatures[keyof typeof SpecialFeatures];


/**
 * 
 * @export
 */
export const SpecialSubscriptionOffer = {
    None: 'none',
    BonusTokens: 'bonus_tokens'
} as const;
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
export const SubscriptionStatus = {
    Inactive: 'inactive',
    Active: 'active',
    Trial: 'trial',
    Canceled: 'canceled'
} as const;
export type SubscriptionStatus = typeof SubscriptionStatus[keyof typeof SubscriptionStatus];


/**
 * 
 * @export
 */
export const SubscriptionTier = {
    Premium: 'premium',
    Ultra: 'ultra'
} as const;
export type SubscriptionTier = typeof SubscriptionTier[keyof typeof SubscriptionTier];


/**
 * 
 * @export
 */
export const TagCategory = {
    BaseModel: 'base_model',
    HairColor: 'hair_color',
    BodyType: 'body_type',
    BreastSize: 'breast_size',
    AssSize: 'ass_size',
    SexPosition: 'sex_position',
    Gender: 'gender',
    Fetishes: 'fetishes',
    Ethnicity: 'ethnicity',
    Age: 'age',
    Lora: 'lora',
    Style: 'style',
    RoleplayType: 'roleplay_type',
    CharacterType: 'character_type'
} as const;
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
export const TagImageLora = {
    Aheago: 'aheago',
    Anal: 'anal',
    Bdsm: 'BDSM',
    Blowjob: 'blowjob',
    Bukkake: 'bukkake',
    Buttplug: 'buttplug',
    Cowgirl: 'cowgirl',
    Creampie: 'creampie',
    Deepthroath: 'deepthroath',
    Dildo: 'dildo',
    DoggyStyle: 'doggy_style',
    DoublePenetration: 'double_penetration',
    Facesitting: 'facesitting',
    Facials: 'facials',
    Feets: 'feets',
    Fingering: 'fingering',
    Fisting: 'fisting',
    Footjob: 'footjob',
    FullNelson: 'full_nelson',
    Futa: 'futa',
    Gangbang: 'gangbang',
    Hairy: 'hairy',
    LegsBehindHead: 'legs_behind_head',
    Missionary: 'missionary',
    Pantyhose: 'pantyhose',
    Penis: 'penis',
    ReverseCowgirl: 'reverse_cowgirl',
    Rimjob: 'rimjob',
    SaggingBreasts: 'sagging_breasts',
    Sex: 'sex',
    Sfw: 'sfw',
    Solo: 'solo',
    SpreadingAss: 'spreading_ass',
    Squirting: 'squirting',
    Straddling: 'straddling',
    Tattoos: 'tattoos',
    Tentacles: 'tentacles',
    Titfuck: 'titfuck'
} as const;
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
export const TagVideoLora = {
    Aheago: 'aheago',
    Anal: 'anal',
    Bdsm: 'BDSM',
    Blowjob: 'blowjob',
    BoobBounce: 'boob_bounce',
    BreastExpansion: 'breast_expansion',
    BreastPlay: 'breast_play',
    Bukkake: 'bukkake',
    Cowgirl: 'cowgirl',
    Creampie: 'creampie',
    Cumshot: 'cumshot',
    Deepthroat: 'deepthroat',
    Dildo: 'dildo',
    DoggyStyle: 'doggy_style',
    Facials: 'facials',
    Feets: 'feets',
    Fingering: 'fingering',
    Footjob: 'footjob',
    Futa: 'futa',
    Hanjob: 'hanjob',
    Joi: 'joi',
    Kissing: 'kissing',
    Masturbation: 'masturbation',
    MatingPress: 'mating_press',
    Missionary: 'missionary',
    Orgasm: 'orgasm',
    Penis: 'penis',
    Pissing: 'pissing',
    PussyLicking: 'pussy_licking',
    Rimjob: 'rimjob',
    Sex: 'sex',
    Sfw: 'sfw',
    SizeChange: 'size_change',
    Solo: 'solo',
    Squirting: 'squirting',
    StomachBulge: 'stomach_bulge',
    Tentacles: 'tentacles',
    Titfuck: 'titfuck',
    Twerk: 'twerk'
} as const;
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
export const UserClaimType = {
    Discord: 'discord',
    Reddit: 'reddit',
    Instagram: 'instagram',
    DailyLogin: 'daily_login'
} as const;
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
export const UserRole = {
    Admin: 'admin',
    User: 'user',
    Bot: 'bot',
    Editor: 'editor',
    Tester: 'tester'
} as const;
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
export const VideoGenerationStatus = {
    Started: 'started',
    Queued: 'queued',
    Running: 'running',
    Finished: 'finished',
    Failed: 'failed',
    MaxConcurencyReached: 'max_concurency_reached',
    ModerationException: 'moderation_exception',
    NotEnoughTokens: 'not_enough_tokens',
    DailyFreeLimitReached: 'daily_free_limit_reached'
} as const;
export type VideoGenerationStatus = typeof VideoGenerationStatus[keyof typeof VideoGenerationStatus];


/**
 * 
 * @export
 */
export const VideoLoraName = {
    PovInsertion: 'pov_insertion',
    FacialsV2: 'facials_v2',
    CumInMouth: 'cum_in_mouth',
    AnimeCumshotHair: 'anime_cumshot_hair',
    AnimeFacials: 'anime_facials',
    AnimeCumshotMouth: 'anime_cumshot_mouth',
    AnimeCumshotTongue: 'anime_cumshot_tongue',
    AnimeCumshot: 'anime_cumshot',
    MouthfullCumshot: 'mouthfull_cumshot',
    BreastExpansion: 'breast_expansion',
    Cunnilingus: 'cunnilingus',
    Airblowjob: 'airblowjob',
    DildoHandjob: 'dildo_handjob',
    BreastPlayGrabbingSolo: 'breast_play_grabbing_solo',
    BreastPlayGrabbingMan: 'breast_play_grabbing_man',
    BreastPlayCoverSolo: 'breast_play_cover_solo',
    BreastPlayRubSolo: 'breast_play_rub_solo',
    BreastPlayNipplePinch: 'breast_play_nipple_pinch',
    BreastPlay: 'breast_play',
    PovIntimateContact: 'pov_intimate_contact',
    TwerkV2: 'twerk_v2',
    HandjobBlowjob: 'handjob_blowjob',
    StomachBulgeV2: 'stomach_bulge_v2',
    BigSplash: 'big_splash',
    FingeringV2: 'fingering_v2',
    FaceToFeet: 'face_to_feet',
    Meatspin: 'meatspin',
    TentaclesV2: 'tentacles_v2',
    FutaMasturbationCumshot: 'futa_masturbation_cumshot',
    MatingPress: 'mating_press',
    FootjobV2: 'footjob_v2',
    FutaSoloToSex: 'futa_solo_to_sex',
    OrgasmFace: 'orgasm_face',
    OrgasmBodyShake: 'orgasm_body_shake',
    FootWorshipSucking: 'foot_worship_sucking',
    JoiHandGesture: 'joi_hand_gesture',
    PenisAndBreastsSizeController: 'penis_and_breasts_size_controller',
    FrenchKiss: 'french_kiss',
    Creampie: 'creampie',
    PovTittyFuck: 'pov_titty_fuck',
    PovKissing: 'pov_kissing',
    DildoPenetration: 'dildo_penetration',
    SexyMoves: 'sexy_moves',
    DeepthroatFaceFuck: 'deepthroat_face_fuck',
    SmoothAnimation: 'smooth_animation',
    PovPulloutCumshotNoTouching: 'pov_pullout_cumshot_no_touching',
    PovPulloutCumshotManFinishes: 'pov_pullout_cumshot_man_finishes',
    PovPulloutCumshotFemaleFinishes: 'pov_pullout_cumshot_female_finishes',
    AhegaoDroolingWithMiddlefinger: 'ahegao_drooling_with_middlefinger',
    PenisInsert: 'penis_insert',
    SelfNippleSucking: 'self_nipple_sucking',
    CumhaterFacial: 'cumhater_facial',
    FurryEnhancer: 'furry_enhancer',
    Pronebone: 'pronebone',
    GaggingDisgustedExpression: 'gagging_disgusted_expression',
    FootjobSockjobShoejob: 'footjob_sockjob_shoejob',
    BodyGrowth: 'body_growth',
    BodyGrowthClothesRipoff: 'body_growth_clothes_ripoff',
    AnimeXrayCreampie: 'anime_xray_creampie',
    TongueOut: 'tongue_out',
    Rimjob: 'rimjob',
    BoobBounceV2: 'boob_bounce_v2',
    TakerPovBlowjob: 'taker_pov_blowjob',
    SpitToCamera: 'spit_to_camera',
    RunningBoobBounce: 'running_boob_bounce',
    SplitTongue: 'split_tongue',
    ThunderGodEyes: 'thunder_god_eyes',
    OralPenisInsertion: 'oral_penis_insertion',
    FaceToFeetAlternative: 'face_to_feet_alternative',
    Deepthroat: 'deepthroat',
    ImpliedBlowjob: 'implied_blowjob',
    MissionaryV2: 'missionary_v2',
    DoggystyleV2: 'doggystyle_v2',
    CowgirlV2: 'cowgirl_v2',
    BlowjobV2: 'blowjob_v2',
    ReverseCowgirl: 'reverse_cowgirl',
    DoubleBlowjob: 'double_blowjob',
    GeneralSexPoses: 'general_sex_poses',
    SeriesOfCumshots: 'series_of_cumshots',
    Bukkake: 'bukkake',
    FaceDownAssUp: 'face_down_ass_up',
    HandjobV2: 'handjob_v2',
    HandjobDoublehand: 'handjob_doublehand',
    DildoRide: 'dildo_ride',
    Anal: 'anal',
    FemaleSquirt: 'female_squirt',
    Ahegao: 'ahegao',
    Bondage: 'bondage',
    Dancing: 'dancing',
    Spanking: 'spanking',
    FemaleMasturbation: 'female_masturbation',
    PovDoggyStyle: 'pov_doggy_style',
    Blowjob: 'blowjob',
    PovMissionary: 'pov_missionary',
    PovCowgirl: 'pov_cowgirl',
    TittyFuck: 'titty_fuck',
    FemaleGenitalsHelpter: 'female_genitals_helpter',
    Fingering: 'fingering',
    PovDoggyStyle2: 'pov_doggy_style2',
    Handjob: 'handjob',
    BoobGrab: 'boob_grab',
    FootJob: 'foot_job',
    Tentacles: 'tentacles',
    StomachBulge: 'stomach_bulge',
    PovFuttaFelatio: 'pov_futta_felatio',
    FutanariMasturbation: 'futanari_masturbation',
    BoobsBounce: 'boobs_bounce',
    Penis: 'penis',
    Cumshot: 'cumshot',
    Twerk: 'twerk',
    Facials: 'facials',
    FaceFuck: 'face_fuck',
    BoobsJiggling: 'boobs_jiggling'
} as const;
export type VideoLoraName = typeof VideoLoraName[keyof typeof VideoLoraName];


/**
 * 
 * @export
 */
export const VisualType = {
    Natural: 'natural',
    Altgirl: 'altgirl',
    Bimbo: 'bimbo',
    Cyberpunk: 'cyberpunk',
    Dominatrix: 'dominatrix',
    Egirl: 'egirl',
    Goth: 'goth',
    Hipster: 'hipster',
    Instachick: 'instachick',
    Nordic: 'nordic',
    Kawaii: 'kawaii',
    Punk: 'punk',
    Schoolgirl: 'schoolgirl',
    Tomboy: 'tomboy'
} as const;
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


